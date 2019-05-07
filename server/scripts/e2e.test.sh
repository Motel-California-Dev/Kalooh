#!/bin/bash

echo "Starting server..."

npm run start &

echo "Checking port $PORT..."
until ss -tln | grep :$PORT -q; do
  sleep 0.2
done

echo "Commencing tests..."
npx cucumber-js test/integration/features --require-module @babel/register --require test/integration/steps

