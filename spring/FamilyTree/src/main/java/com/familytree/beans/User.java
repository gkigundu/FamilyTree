package com.familytree.beans;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(schema="familytree",name="USERS")
public class User implements Serializable {
	@Id
	@Column(name="USER_ID")
	@SequenceGenerator(name = "USER_ID_SEQ", sequenceName = "USER_ID_SEQ")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "USERID_SEQ")
	private Integer userID;
	//foreign keys to LOGIN table
	@Column(name="USERNAME")
	private String username;
	@Column(name="EMAIL")
	private String email;
	@Column(name="PHONE_NUMBER")
	private String phoneNumber;
	
	@Column(name="FIRST_NAME")
	private String firstName;
	@Column(name="LAST_NAME")
	private String lastName;
	
	
	public User(int userID, String username, String email, String phoneNumber, String firstName,
			String lastName) {
		super();
		this.userID = userID;
		this.username = username;
		this.email = email;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
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

	@Override
	public String toString() {
		return "User [userID=" + userID + ", username=" + username + ", email=" + email + ", phoneNumber=" + phoneNumber
				+ ", firstName=" + firstName + ", lastName=" + lastName + "]";
	}
	public void copyAll(User user) {
		setUserID(user.getUserID());
		setUsername( user.getUsername());
		setEmail(user.getEmail());
		setPhoneNumber(user.getPhoneNumber());
		setFirstName(user.getFirstName());
		setLastName(user.getLastName());
	}
	
}
