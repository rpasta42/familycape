from flask import Flask, session, redirect, url_for, escape, request, render_template, send_from_directory

app = Flask(__name__)

APP_ROOT='/'
DOMAIN = 'https://familycape.com/'
STATIC_NGINX = DOMAIN + 'static-nginx'

#with open('dynamic/header.html', 'r') as f:
#   header_code = f.read()


@app.route(APP_ROOT, strict_slashes=False)
@app.route(APP_ROOT + 'index', strict_slashes=False)
@app.route(APP_ROOT + 'index.html', strict_slashes=False)
def index():
   return render_template('index.html',
                          static=STATIC_NGINX,
                          root=DOMAIN)
                          #header=header_code, )

@app.route(APP_ROOT + 'contact', strict_slashes=False)
@app.route(APP_ROOT + 'contact.html', strict_slashes=False)
def contact():
   return render_template('contact.html',
                          static=STATIC_NGINX,
                          root=DOMAIN)

@app.route(APP_ROOT + 'about')
@app.route(APP_ROOT + 'about.html')
def about():
   return render_template('about.html',
                          static=STATIC_NGINX,
                          root=DOMAIN)

@app.route('/<path:path>')
def catch_all(path):
   return render_template('error.html',
                          static=STATIC_NGINX,
                          root=DOMAIN,
                          path=path)

#port: 4219
if __name__ == '__main__':
   cert_path = '/etc/letsencrypt/live/familycape.com'
   pub = '%s/fullchain.pem' % cert_path
   priv = '%s/privkey.pem' % cert_path

   context = (pub, priv)
   app.run(ssl_context=context, host='0.0.0.0', debug=True, threaded=True, port=4219)

