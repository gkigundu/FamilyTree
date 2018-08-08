package com.familytree.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.familytree.beans.Login;
import com.familytree.beans.User;

public interface LoginRepository extends JpaRepository<Login, Integer> {
    public Login findLoginByUserID(Integer id);
    public Login findLoginByUsername(String userName);
    public Login findLoginByPhoneNumber(String phoneNumber);
    public Login findLoginByEmail(String email);
    public List<Login> findLoginsByUserIDIn(Iterable<Integer> userIDs);
}