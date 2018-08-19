package com.familytree.repositories;

import org.springframework.stereotype.Component;

import com.familytree.beans.Login;
@Component
public interface LoginRepository extends GenericRepository<Login> {
    public Login findByUsername(String userName);
    public Login findByEmail(String email);
}