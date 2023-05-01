#!/bin/bash

for dir in */;
do
    # echo $dir
    if [ $dir != -d ]; then
    cd $dir
    npm i
    cd ..
    fi
done
