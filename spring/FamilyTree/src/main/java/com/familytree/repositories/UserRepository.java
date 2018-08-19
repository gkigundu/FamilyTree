package com.familytree.repositories;

import org.springframework.stereotype.Component;

import com.familytree.beans.User;
@Component
public interface UserRepository extends GenericRepository<User> {
}