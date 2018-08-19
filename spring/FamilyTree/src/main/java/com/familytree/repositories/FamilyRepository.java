package com.familytree.repositories;

import org.springframework.stereotype.Component;

import com.familytree.beans.Family;
@Component
public interface FamilyRepository<T extends Family> extends GenericRepository<T>{

}
