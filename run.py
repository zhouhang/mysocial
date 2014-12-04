import web, os
from setting import *
from index import *
from login import *
from register import *
from list import *
from product import *
from order import *

#https://github.com/rethinkdb/rethinkdb-example-webpy-blog  

app = web.application(urls, globals())

from web.httpserver import StaticMiddleware
application = app.wsgifunc(StaticMiddleware)

web.config.debug = True
curdir = os.path.dirname(__file__)

if web.config.get('_session') is None:    
    session = web.session.Session(app, web.session.DiskStore('session'), initializer = {'islogin':False, 'uid':None})
    web.config._session = session
else:
    session = web.config._session


if __name__ == "__main__":
    app.run()