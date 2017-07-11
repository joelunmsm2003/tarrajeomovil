killall -9 node
killall 9 python

cd ./client
gulp watch&

cd ../server
npm start&

cd ../tarrajeo
python manage.py runserver&

subl
