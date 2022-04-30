from flask import Flask, request, render_template
from sarcasm_detector import predict

app = Flask(__name__)


@app.route("/", methods=["GET"])
def homepage():
    return render_template('/sarcasm')


@app.route("/result", methods=["GET", "POST"])
def prediction():
    if request.method == "POST":
        form_data = request.form
        status = predict(form_data["sentence"])
        return {'response': status}
    else:
        return render_template("/profile")


@app.route("/about", methods=["GET"])
def about_us():
    return render_template('about.html')


#if __name__ == "__main__":
#    app.run(debug=True)
