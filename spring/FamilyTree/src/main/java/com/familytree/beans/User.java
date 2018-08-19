package com.familytree.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Component
@Entity
@Table(schema="familytree",name="USERS")
public class User  extends GenericBean {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	@Column(name="USER_ID")
	private Integer id;
	
	@OneToOne(fetch= FetchType.LAZY, mappedBy="user")
	@JsonIgnore
	private Login login;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
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
	
	public User(Integer id, Family family, String phoneNumber, String firstName, String lastName, Login login) {
		super(id);
		this.id = id;
		this.family = family;
		this.phoneNumber = phoneNumber;
		this.firstName = firstName;
		this.lastName = lastName;
		this.login=login;
	}
	public void setId(Integer id) {
		this.id=id;
		super.setId(id);
	}
	public Integer getId() {
		return this.id;
	}
	
	public Login getLogin() {
		return login;
	}

	public void setLogin(Login login) {
		this.login = login;
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
	
	@Override
	public String toString() {
		return "User [id=" + id + ", phoneNumber=" + phoneNumber==null?"null":phoneNumber
				+ ", firstName=" + firstName==null?"null":firstName 
						+ ", lastName=" + lastName==null?"null":lastName
								+"]";
	}
	public void copyAll(User user) {
		setId(user.getId());
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
