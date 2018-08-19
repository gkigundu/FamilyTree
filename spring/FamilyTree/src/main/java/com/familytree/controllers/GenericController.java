package com.familytree.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.familytree.beans.GenericBean;
import com.familytree.exceptions.GeneralException;
import com.familytree.services.GenericService;
@RestController
@RequestMapping("/familytree")
public abstract class GenericController<T extends GenericBean> {
	protected GenericService<T> service;
	protected T bean;
	private static final Logger logger = LoggerFactory.getLogger(GenericController.class);
	@Autowired
	public GenericController(@Qualifier("GenericService")GenericService<T> genericService) {
		super();
		this.service = genericService;
	}
	public String getType() {
		return bean.getClass().getName();
	}


	@GetMapping("/all")
	public ResponseEntity<List<T>> getAll() throws GeneralException{
		List<T> beans=service.getAll();
		if(beans!=null && beans.size()>0) {
			logger.info("Found " + beans.size() + " " + this.getType());
			return new ResponseEntity<List<T>>(beans, HttpStatus.OK);
		}else {
			String msg = "No entries found";
			logger.info(msg);
			throw new GeneralException(msg);
		}
	}
	@GetMapping("/id/{id}")
	public ResponseEntity<T> getById(@PathVariable Integer id) throws GeneralException{
		T bean=service.getByID(id);
		if(bean!=null) {
			logger.info(bean.toString());
			return new ResponseEntity<T>(bean, HttpStatus.OK);
		}else {
			String msg ="No entry found with id: " + id;
			logger.info(msg);
			throw new GeneralException(msg);
		}
	}
	@PostMapping("/add")
	public ResponseEntity<T> add(@RequestBody T bean) throws GeneralException{
		if(bean!=null) {
			logger.info(bean.toString());
			return new ResponseEntity<T>(service.add(bean), HttpStatus.OK);
		}else {
			String msg ="Null entry found";
			logger.info(msg);
			throw new GeneralException(msg );
		}
	}
	@PostMapping("/delete")
	public ResponseEntity<Boolean> delete(@RequestBody T bean) throws GeneralException{
		if(bean!=null) {
			logger.info(bean.toString());
			return new ResponseEntity<Boolean>(service.delete(bean), HttpStatus.OK);
		}else {
			String msg ="Null entry found" ;
			logger.info(msg);
			throw new GeneralException(msg);
		}
	}
	@PostMapping("/update")
	public ResponseEntity<T> update(@RequestBody T bean) throws GeneralException{
		if(bean!=null) {
			return new ResponseEntity<T>(service.update(bean), HttpStatus.OK);
		}else {
			String msg ="Null entry found" ;
			logger.info(msg);
			throw new GeneralException(msg);
		}
	}
	
	
}
