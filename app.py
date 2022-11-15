from flask import Flask, render_template, request, Response
from email.message import EmailMessage
import ssl
import smtplib

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/", methods=["POST"])
def emailReceipt():
    if request.method == "POST":
        print("POST RECEIVED")

        dictData = request.form.to_dict()

        print(dictData)

        
        to_Addr = 'contact.fares.mohamed@gmail.com'
        fr_Addr = dictData['embox']
        subject = dictData['sbjbox']

        
        auto_notice = "This is an automated email sent by server"
        message = auto_notice + "\n\n" + dictData['msgbox'] + "\n\nFrom {}".format(fr_Addr)

        em = EmailMessage()
        em['From'] = to_Addr #Send to self - Server has no email
        em['To']   = to_Addr #Send to self
        em['Subject'] = subject
        em.set_content(message)

        context = ssl.create_default_context()
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context)

        server.login("contact.fares.mohamed@gmail.com", "dxudgnhbnfqguxgr")

        server.set_debuglevel(1)
        server.sendmail(to_Addr, to_Addr, em.as_string()) # Send email to self with from_address attached in body
        server.quit()

        return Response(status=200)
        

if __name__ == '__main__':
    app.run()