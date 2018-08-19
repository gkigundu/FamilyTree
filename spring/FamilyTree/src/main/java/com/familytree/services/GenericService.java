package com.familytree.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.familytree.beans.GenericBean;
import com.familytree.exceptions.GeneralException;
import com.familytree.repositories.GenericRepository;
@Component
@Service("GenericService")
@Qualifier("GenericService")
@Scope(BeanDefinition.SCOPE_PROTOTYPE)
public class GenericService<T extends GenericBean> {
	protected GenericRepository<T> repo;
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
    	return this.repo.findAll();
    }
    /**
     * Returns an entry by ID. 
     * @param Integer id
     * @return A database entry
     * @throws GeneralException 
     */
    public T getByID(Integer id){
    	if(id != null) {
	    	Optional<T> entry = this.repo.findById(id);
	        if(entry.isPresent()) {
	        	return entry.get();
	        }
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
    	T existing = this.getByID(entry.getId());
    	existing.update(entry);
    	this.repo.save(existing);
        return existing;
    }   
    /**
     * Adds an entry to the database
     * @param bean
     * @return saved entry
     * @throws GeneralException
     */
    @Transactional(rollbackOn = Exception.class)
    public T add(T entry) throws GeneralException {
        entry = this.repo.save(entry);
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
    	Integer id = entry.getId();
        this.repo.delete(entry);
        return this.repo.existsById(id);
    }
    /**
     * Saves an entry directly the database
     * @param bean
     * @return saved entry
     * @throws GeneralException
     */
    @Transactional(rollbackOn = Exception.class)
    public T save(T entry) {
        return this.repo.save(entry);
    }    
}
