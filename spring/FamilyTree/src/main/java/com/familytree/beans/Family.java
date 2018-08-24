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
	private List<User> users=new ArrayList<User>();
	
	public Family() {
		super();
	}
	public Family(Integer id, ArrayList<User> users) {
		super(id);
		this.id = id;
		this.users = users;
	}
	public void setId(Integer id) {
		this.id=id;
		super.setId(id);
	}
	public Integer getId() {
		return this.id;
	}

	public List<User> getUsers() {
		return this.users;
	}
	public void setUsers(List<User> users) {
		this.users = users;
	}
	
	public void addUser(User user) {
		if(this.users==null)
			this.users = new ArrayList<User>();
		this.users.add(user);
	}
	public void removeUser(User user) {
		if(this.users==null)
			this.users = new ArrayList<User>();
		else
			this.users.remove(user);
	}
	public void addUsers(List<User> users) {
		if(this.users==null)
			this.users = users;
		else
			this.users.addAll(users);
	}
	public void removeUsers(List<User> users) {
		if(this.users==null)
			this.users = users;
		this.users.removeAll(users);
	}

	@Override
	public String toString() {
		return "Family [id=" + (id==null?"null":id)  
				+ ", users=" + (users!=null?users:"null")
				+ "]";
	}
	public void update(GenericBean bean) {
		Family family = (Family) bean;
	    this.addUsers(family.getUsers());
	}
	@Override
	public boolean hasRequired() {
		return true;
	}
}
