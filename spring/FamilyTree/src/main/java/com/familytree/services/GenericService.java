package com.familytree.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.familytree.beans.GenericBean;
import com.familytree.controllers.GenericController;
import com.familytree.exceptions.GeneralException;
import com.familytree.repositories.GenericRepository;
@Component
@Service("GenericService")
@Qualifier("GenericService")
@Scope(BeanDefinition.SCOPE_PROTOTYPE)
public class GenericService<T extends GenericBean> {
	protected GenericRepository<T> repo;
	protected static final Logger logger = LoggerFactory.getLogger(GenericService.class);
	public GenericService() {
		super();
	}

	public GenericService(GenericRepository<T> repo) {
		super();
		this.repo = repo;
	}
    /**
     * Returns all entries.
     * @return A list of all the entries in the database.
     * @throws GeneralException 
     */
    public List<T> getAll() {
    	logger.info("Getting all entries");
    	List<T> beans=null;
    	try{
    		beans=  this.repo.findAll();
    	}catch(Exception e) {
    		logger.error("Error getting entries from DB");
    		throw e;
    	}
    	if (beans==null) {
    		logger.info("No entries found: null");
    	}else if(beans.size()==0) {
    		logger.info("No entries found: size 0");
    	}else {
    		logger.info("Found " + beans.size() + " entries");
    	}
    	return beans;
    }
    /**
     * Returns an entry by ID. 
     * @param Integer id
     * @return A database entry
     * @throws GeneralException 
     */
    public T getByID(Integer id){
    	logger.info("Looking for entry with id: " + id);
    	if(id != null) {
	    	Optional<T> entry=null;
	    	try{
	    		entry= this.repo.findById(id);
	    	}catch(Exception e) {
	    		logger.error("Error getting entry with id: "+ id);
	    	}
	    	if(entry==null || !entry.isPresent()) {
	    		logger.info("No entry found with id: " + id);
	    	}else {
	        	T bean = entry.get();
	        	logger.info("Found: " + bean.toString());
	        	return bean;
	        }
    	}else {
    		logger.warn("Null id provided for getByID()");
    	}
        return null;
        
    }
    /**
     * Updates a entry in the database
     * @param bean
     * @return updated bean
     * @throws GeneralException
     */
    @Transactional(rollbackOn = Exception.class)
    public T update(T entry){
    	if(entry==null) {
    		logger.error("Error on updating DB : Null entry provided");
    		return entry;
    	}
    	logger.info("Updating " + entry.toString());
    	T existing = this.getByID(entry.getId());
    	if(existing==null) {
    		logger.info("No existing entry found");
    		return existing;
    	}
    	existing.update(entry);
    	try {
    		existing = this.save(existing);
    	}catch(Exception e) {
    		logger.error("Error updating entry to DB: " + entry.toString());
    	}
    	logger.info("Update successful on: " + existing.toString());
        return existing;
    }   
    /**
     * Adds an entry to the database
     * @param bean
     * @return saved entry
     * @throws GeneralException
     */
    @Transactional(rollbackOn = Exception.class)
    public T add(T entry) throws GeneralException{
    	if(entry==null) {
    		logger.error("Null entry provided for add to DB");
    		throw new GeneralException("Null entry provided for add to DB");
    	}
    	logger.info("Adding to DB: " + entry.toString());
    	try {
    		entry = this.save(entry);
    	}catch(Exception e) {
    		logger.info("Error adding to DB: " + entry.toString());
    		throw e;
    	}
    	logger.info("Successfully added to DB: "+ entry.toString());
        return entry;
    }    
    /**
     * Delete an entry in the database
     * @param bean
     * @return saved entry
     * @throws GeneralException
     */
    @Transactional(rollbackOn = Exception.class)
    public boolean delete(T entry) {
    	logger.info("Deleting from DB: " + entry.toString());
    	Integer id = entry.getId();
    	try {
    		this.repo.delete(entry);
    	}catch (Exception e){
    		logger.error("Error deleting from DB: " + entry.toString());
    		throw e;
    	}
        boolean success  = this.repo.existsById(id);
        if(success)
        	logger.info("Successfully deleted: " + entry.toString());
        else
        	logger.error("Entry not deleted "+ entry.toString());
        return success;
    }
    /**
     * Saves an entry directly the database
     * @param bean
     * @return saved entry
     * @throws GeneralException
     */
    @Transactional(rollbackOn = Exception.class)
    public T save(T entry) {
        try {
        	entry = this.repo.save(entry);
        }catch(Exception e) {
        	logger.error("Error saving to db: " + entry.toString());
        }
        return entry;
    }    
}
