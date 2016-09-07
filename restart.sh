#!/bin/bash

sudo pkill python

#export FLASK_APP=serv.py
#python3 -m flask run --host=0.0.0.0 --port=4219 &
sudo python3 serv.py
