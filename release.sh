#!/bin/bash

files=('about/' 'apply/' 'css/' 'images/' 'index.html' 'js/' 'shop/')
for var in ${files[@]};do
   scp -r $var root@123.207.18.130:/var/www/html/sirens_web/
done
`../sirens_web_landing/release.sh`
#echo ''
#allfiles=(`ls`)
#for var1 in ${allfiles[@]};do
 #  echo $var1
#done
