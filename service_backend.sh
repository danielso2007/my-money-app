#!/bin/bash
echo Rodando BACKEND...
yarn run backend_background
ps -ef | grep loader.js