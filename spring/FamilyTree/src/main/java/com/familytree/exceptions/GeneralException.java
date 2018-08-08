package com.familytree.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception representing an HTTP No Content status.
 */
@ResponseStatus(HttpStatus.NO_CONTENT)
public class GeneralException extends Exception{
	private static final long serialVersionUID = -2553137612653953635L;

	public GeneralException(String message) {
        super(message);
    }
}