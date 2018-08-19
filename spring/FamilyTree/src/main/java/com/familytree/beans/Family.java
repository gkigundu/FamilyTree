package com.familytree.beans;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.stereotype.Component;
@Component
@Entity
@Table(schema="familytree",name="FAMILY")
public class Family  extends GenericBean {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	@Column(name="FAMILY_ID")
	private Integer id;
	@OneToMany(cascade = CascadeType.ALL,mappedBy = "family", orphanRemoval = true)
	@Column(name = "FAMILY_ID")
	private List<User> users=new ArrayList<User>();
//	@OneToMany(cascade = CascadeType.ALL,mappedBy = "family", orphanRemoval = true)
//	@Column(name = "FAMILY_ID")
//	private List<Login> logins=new ArrayList<Login>();

	public List<User> getUsers() {
		return users;
	}
	public void setUsers(List<User> users) {
		this.users = users;
	}
	
//	public List<Login> getLogins() {
//		return logins;
//	}
//	public void setLogins(List<Login> logins) {
//		this.logins = logins;
//	}
	public void addUser(User user) {
		users.add(user);
	}
	public void removeUser(User user) {
		users.remove(user);
	}
	public void addUsers(List<User> user) {
		users.addAll(user);
	}
	public void removeUsers(List<User> user) {
		users.removeAll(user);
	}
//	public void addLogin(Login login) {
//		logins.add(login);
//	}
//	public void removeLogin(Login login) {
//		logins.remove(login);
//	}
//	public void addLogins(List<Login> login) {
//		logins.addAll(login);
//	}
//	public void removeLogins(List<Login> login) {
//		logins.removeAll(login);
//	}
	public Integer getID() {
		return id;
	}
	public void getID(Integer id) {
		this.id=id;
	}
	@Override
	public String toString() {
		return "Family [id=" + id + ", users=" + users + "]";
	}
	public void update(GenericBean bean) {
		Family family = (Family) bean;
		//this.addLogins(family.getLogins());
	    this.addUsers(family.getUsers());
	}
	@Override
	public boolean hasRequired() {
		return true;
	}
}
