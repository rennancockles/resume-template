#!/usr/bin/env bash

set -e

bash scripts/build.sh

bash scripts/docker-login.sh

docker push "rennancockles/resume-template:latest"