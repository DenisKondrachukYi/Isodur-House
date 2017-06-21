FROM python:3.5
RUN curl -sL curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install nodejs
RUN apt-get install -y gettext
ADD ./ /isodur
WORKDIR /isodur/src
RUN npm install
RUN npm install webpack -g
RUN webpack
WORKDIR /isodur
RUN pip install -r requirements.txt
RUN python manage.py migrate
RUN python manage.py collectstatic --noinput
RUN python manage.py makemessages
RUN python manage.py compilemessages
VOLUME /isodur/collected_files
