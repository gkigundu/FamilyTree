package com.familytree.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.familytree.beans.Family;
import com.familytree.repositories.GenericRepository;
import com.familytree.repositories.FamilyRepository;

/**
 * A Service class for retrieving and modifying Family data.
 */
@Service("FamilyService")
@Qualifier("FamilyService")
@Scope(BeanDefinition.SCOPE_PROTOTYPE)
public class FamilyService extends GenericService<Family> {
        
    public FamilyService() {
        super();
    }
    /**
     * Creates a Family service 
     * Instantiates repositories
     * @param FamilyRepository DAO for retrieving and modifying Family data.
     */
    @Autowired
    public FamilyService(FamilyRepository repo) {
        super((GenericRepository<Family>) repo);
        this.repo = repo;
    }
}