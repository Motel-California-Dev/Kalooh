if [[ -z $1 ]]; then
  URL=ec2-18-215-245-62.compute-1.amazonaws.com 
else 
  URL=localhost:3000
fi

curl -X POST $URL/auth/login -H "Content-Type: application/json" -d '{"userName":"test1","password":"testpw"}'
