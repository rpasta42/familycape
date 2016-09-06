from flask import Flask, session, redirect, url_for, escape, request, render_template, send_from_directory

app = Flask(__name__)

APP_ROOT='/'
STATIC_NGINX=APP_ROOT + 'static-nginx'

with open('dynamic/header.html', 'r') as f:
   header_code = f.read()


@app.route(APP_ROOT)
def index():
   return render_template('index.html', header=header_code, static=STATIC_NGINX)

#port: 4219
if __name__ == '__main__':
   cert_path = '/etc/letsencrypt/live/familycape.com'
   pub = '%s/fullchain.pem' % cert_path
   priv = '%s/privkey.pem' % cert_path

   context = (pub, priv)
   app.run(ssl_context=context, host='0.0.0.0', debug=True, threaded=True, port=4219)

