import web

urls = (
    r'/', 'index',
    r'/login', 'login',
    r'/register', 'register',
    r'/list', 'list',
    r'/product', 'product',
    r'/order', 'order'
)

render = web.template.render('templates/', base='layout')

db = web.database(dbn='mysql', db='test', host='localhost', port=3306, user='root', pw='')
