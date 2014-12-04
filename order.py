from setting import *

class order:
    def GET(self):
        return render.order.orderFill()
