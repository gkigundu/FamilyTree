package com.familytree.repositories;

import org.springframework.stereotype.Component;

import com.familytree.beans.Login;
import com.familytree.beans.User;
@Component
public interface LoginRepository extends GenericRepository<Login> {
    public Login findByUsername(String userName);
    public Login findByEmail(String email);
    public User findUserByUsername(String userName);
    public User findUserByEmail(String email);
}