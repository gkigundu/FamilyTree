package com.familytree.beans;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(schema="familytree",
		name="LOGIN",
		uniqueConstraints = {
				@UniqueConstraint(columnNames={"username", "email","phone"})})
public class Login  implements Serializable  {
	@Id
	@Column(name="USERNAME")
	private String username;
	@Column(name="EMAIL")
	private String email;
	@Column(name="PASSWORD")
	private String password;
	@Column(name="PHONE_NUMBER")
	private String phoneNumber;
	private Integer userID;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phone_number) {
		this.phoneNumber = phone_number;
	}
	public int getUserID() {
		return userID;
	}
	public void setUserID(Integer userID) {
		this.userID = userID;
	}
	@Override
	public String toString() {
		return "Login [username=" + username + ", email=" + email + ", password=" + password + ", phoneNumber="
				+ phoneNumber + ", userID=" + userID + "]";
	}
	public void copyAll(Login login) {
		setUserID(login.getUserID());
		setUsername( login.getUsername());
		setEmail(login.getEmail());
		setPhoneNumber(login.getPhoneNumber());
	}
	
}
