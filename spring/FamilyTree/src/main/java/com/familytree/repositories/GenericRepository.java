package com.familytree.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.familytree.beans.GenericBean;
@NoRepositoryBean
public interface GenericRepository<T extends GenericBean> extends JpaRepository<T, Integer>{

}
