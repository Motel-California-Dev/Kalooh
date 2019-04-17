#!/bin/bash 

aws ecs --profile kalooh update-service --cluster kalooh-cluster --service kalooh-server-service --force-new-deployment
