#!/bin/bash

$(aws ecr get-login --no-include-email --region us-east-1)

docker build -t kalooh-server $KALOOH/server 

docker tag kalooh-server:latest 823151457499.dkr.ecr.us-east-1.amazonaws.com/kalooh-server:latest

docker push 823151457499.dkr.ecr.us-east-1.amazonaws.com/kalooh-server:latest
