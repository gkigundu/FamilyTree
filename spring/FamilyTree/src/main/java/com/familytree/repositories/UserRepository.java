package com.familytree.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.familytree.beans.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    public User findUserByUserID(Integer id);
    public User findUserByUsername(String userName);
    public User findUserByPhoneNumber(String phoneNumber);
    public User findUserByEmail(String email);
    public List<User> findUsersByUserIDIn(Iterable<Integer> userIDs);
}