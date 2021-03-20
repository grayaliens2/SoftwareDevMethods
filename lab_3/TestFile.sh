#!/bin/bash
#Author : Ross Panning
#Date : 2/9/2021
#Script:
count_lines() { 
	temp=$(grep -c '' $1)
	echo "There are $temp lines in $1"
}
count_words() {
	 temp=$(grep -o "Lorem\|model\|Ipsum\|will" $1 | wc -l)
	 echo "There are $temp occurances in $1"
 }
add_text() {
	printf "Please enter the text you would like to add!\n: "
	read text
	echo $text | tee -a $1 >/dev/null
}
copy_and_exit() {
	mkdir solution
	cp $1 solution/
}
if test -e "$1"; then
	    echo "What would you like to do:"
	    ans=1
	    while [ "$ans" != 5 ]
	    do
		    printf "==================\n1: Count Lines\n2: Count Words\n3: Add Text\n" 
		    printf "4: Copy and Exit\n==================\n"
		    read ans
		    case $ans in
			    1) count_lines $1 ;;  
			    2) count_words $1 ;;
			    3) add_text $1 ;; 
			    4) 
				    copy_and_exit $1 
				    ans = 5;;
		    esac
	    done
fi
