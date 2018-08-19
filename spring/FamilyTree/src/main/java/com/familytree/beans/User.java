package com.familytree.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.stereotype.Component;
@Component
@Entity
@Table(schema="familytree",name="USERS")
public class User  extends GenericBean {

	//foreign keys to LOGIN table

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	@Column(name="USER_ID")
	private Integer userID;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "FAMILY_ID")
	private Family family;
	
	@Column(name="PHONE_NUMBER")
	private String phoneNumber;
	
	@Column(name="FIRST_NAME")
	private String firstName;
	
	@Column(name="LAST_NAME")
	private String lastName;
	
	public User() {
		super();
	}
	
	public User(Integer userID, Family family, String phoneNumber, String firstName, String lastName) {
		super();
		this.userID = userID;
		this.family = family;
		this.phoneNumber = phoneNumber;
		this.firstName = firstName;
		this.lastName = lastName;
	}

	public int getUserID() {
		return userID;
	}
	public void setUserID(Integer user_id) {
		this.userID = user_id;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phone_number) {
		this.phoneNumber = phone_number;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public Family getFamily() {
		return family;
	}

	public void setFamily(Family family) {
		this.family = family;
	}
	public Integer getID() {
		return userID;
	}
	@Override
	public String toString() {
		return "User [userID=" + userID + ", phoneNumber=" + phoneNumber
				+ ", firstName=" + firstName + ", lastName=" + lastName +", family_id=" + family.getId() +"]";
	}
	public void copyAll(User user) {
		setUserID(user.getUserID());
		setPhoneNumber(user.getPhoneNumber());
		setFirstName(user.getFirstName());
		setLastName(user.getLastName());
	}

	@Override
	public void update(GenericBean bean) {
		User user = (User) bean;
		this.setFirstName(user.getFirstName());
		this.setLastName(user.getLastName());
		this.setPhoneNumber(user.getPhoneNumber());
		this.setFamily(user.getFamily());
	}

	@Override
	public boolean hasRequired() {
		if((this.firstName!=null && !this.firstName.isEmpty()) 
			|| (this.lastName!=null && !this.lastName.isEmpty())
			) {
			return true;
		}
		return false;
	}
	
}
