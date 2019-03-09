#!/bin/bash
echo Rodando BACKEND...
cd backend
cd src
nohup node loader.js > output.log &
ps -ef | grep loader.js