package com.zeepn.utils;
public class EscapeChars {
	/**

	* This method takes a string which may contain HTML tags (ie, ,

	* , etc) and converts the '<'' and '>' characters to their HTML escape sequences.

	 

	* @param input the text to be converted.

	* @return the input string with the characters '<' and '>' replaced with their HTML escape sequences.

	*/

	public static final String escapeHTMLTags(String input) {

	//Check if the string is null or zero length -- if so, return

	//what was sent in.

	if (input == null || input.length() == 0) {

	return input;

	}

	//Use a StringBuffer in lieu of String concatenation -- it is

	//much more efficient this way.

	StringBuffer buf = new StringBuffer(input.length());

	char ch = ' ';

	for (int i = 0; i < input.length(); i++) {

	ch = input.charAt(i);

	if (ch == '<') {
		
	buf.append("&lt;");

	}

	else if (ch == '>') {

	buf.append("&gt;");

	}else if(ch == '"'){

	buf.append("\"");

	}else if(ch == '&'){

	buf.append("&");

	}

	else {

	buf.append(ch);

	}

	}
	return buf.toString();
	}
}