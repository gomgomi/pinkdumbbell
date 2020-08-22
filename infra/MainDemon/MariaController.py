import pymysql

class MController:
    def __init__(self, host, port, id, pw, db_name):
        self.conn = pymysql.connect(host=host, port=port, user= id, password=pw, db=db_name,charset='utf8')
        self.curs = self.conn.cursor()

    def execute_query(self,qry):
        self.curs.execute(qry)
        self.conn.commit()

    def select_query(self, qry):
        self.curs.execute(qry)
        return self.curs.fetchall()
    
