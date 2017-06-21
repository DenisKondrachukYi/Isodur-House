FROM tutum/nginx
RUN rm /etc/nginx/sites-enabled/default
ADD ./nginx.conf /etc/nginx/sites-enabled/nginx.conf
RUN /etc/init.d/nginx start
