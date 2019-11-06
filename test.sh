#!/usr/bin/bash

docker-compose up -d
docker-compose -f test-runner.yml run test-runner
rc=$?
docker-compose down
exit $rc