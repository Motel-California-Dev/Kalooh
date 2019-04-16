if [[ -z $1 ]]; then
  URL=ec2-18-215-245-62.compute-1.amazonaws.com
else
  URL=localhost:3000
fi

curl -X POST $URL/users -H "Content-Type: application/json" -d '{"userName":"test1", "firstName":"test_fn", "lastName": "testln", "email":"test@gmail.com", "password":"testpw"}'
