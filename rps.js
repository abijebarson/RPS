var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.height = Math.min(window.innerHeight, window.innerWidth)
canvas.width = canvas.height
console.log(canvas.height, canvas.width)
ctx.font = `${canvas.width/40}px Arial`;

const n = 10;
const size = Math.floor(Math.min(canvas.width,canvas.height)/20)
let dx = Math.min(canvas.width,canvas.height)/400
let dy = Math.min(canvas.width,canvas.height)/400

const rocim = new Image(size, size);
const papim = new Image(size, size);
const sciim = new Image(size, size);

rocim.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+DQo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGFyaWEtaGlkZGVuPSJ0cnVlIiByb2xlPSJpbWciIGNsYXNzPSJpY29uaWZ5IGljb25pZnktLW5vdG8iIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPjxsaW5lYXJHcmFkaWVudCBpZD0iSWNvbmlmeUlkMTdlY2RiMjkwNGQxNzhlYWIxOTkxNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI4Ny42MTYiIHkxPSIyMS4wNCIgeDI9IjQxLjU0OCIgeTI9IjEzOC4wODQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzllOTU4ZSIvPjxzdG9wIG9mZnNldD0iLjQ2IiBzdG9wLWNvbG9yPSIjOGU4ODg0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzU3NTc1Ii8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJNOC45MyA5MC43NGMtLjUzLTEuMjUtMS4wNC0yLjUtMS41NC0zLjc1Yy0zLjc3LTkuNTEuOTYtMTguMDkgNS4xOC0yNi40OWw2LjEyLTEyLjE2YzEuMjMtMi40NSAzLjEyLTQuNTEgNS40NC01Ljk1bDE3LjYtMTAuOTJsMTcuMzktMTcuOThhOC4xNDcgOC4xNDcgMCAwIDEgMy45Ny0yLjI3bDExLjg0LTIuODZjNS43My0xLjM3IDguMTktMS4xNSAxMC4wNCAxLjQ4YzYuNDEgOS4xIDEwLjcgMTYuNTkgMTYuNDEgMjUuNjZjMy4xMSA0Ljk0IDEwLjI5IDE2LjI5IDEwLjc0IDE3LjA0YzEuMzggMi4zMi44MiA0LjI2Ljc3IDYuOTJjLS4xMiA2LjEzLjk2IDEyLjI5IDMuMiAxOGMuNjcgMS43IDEuNDQgMy4zOCAxLjc5IDUuMTdjLjMyIDEuNjEtLjExIDExLjg0LS40NCAxNS4zYy0uMjcgMi44MS02LjkxIDEzLjMtOS4yOSAxNC41N2MtMi42MiAxLjQtMjIuMDQgOC41NC0yNi4zMyA5Ljc2cy0yMi44OS0zLjAzLTMyLjU1LTQuNTFjLTUuOTctLjkxLTExLjk1LTEuODMtMTcuOTItMi43NGMtNS4xOC0uNzktMTAuMzMtLjE5LTEzLjIzLTUuNDJjLTMuNDEtNi4xMi02LjQ3LTEyLjQxLTkuMTktMTguODV6IiBmaWxsPSJ1cmwoI0ljb25pZnlJZDE3ZWNkYjI5MDRkMTc4ZWFiMTk5MTQpIi8+PGxpbmVhckdyYWRpZW50IGlkPSJJY29uaWZ5SWQxN2VjZGIyOTA0ZDE3OGVhYjE5OTE1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjguODU5IiB5MT0iMTIwLjEzNyIgeDI9IjQ3LjE3MSIgeTI9Ijc3LjUzNiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMzc0NzRmIi8+PHN0b3Agb2Zmc2V0PSIuNjEyIiBzdG9wLWNvbG9yPSIjNDI1NjVmIiBzdG9wLW9wYWNpdHk9Ii4xOTIiLz48c3RvcCBvZmZzZXQ9Ii43NTciIHN0b3AtY29sb3I9IiM0NTVhNjQiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTMxLjM0IDExNWM1Ljk3LjkxIDExLjk1IDEuODMgMTcuOTIgMi43NGMzLjExLjQ4IDcuMTUgMS4yNCAxMS4zNCAyLjAyYy0yLjgyLTMuMzQtNy4wMy03LjMtOS44NS0xMC42NGMtLjYxLS43Mi0xLjIzLTEuNDctMS40NS0yLjM5Yy0uMjMtLjk4LjAzLTEuOTkuMy0yLjk2Yy44Ni0zLjE4IDEuMDgtNi42MyAxLjk0LTkuODFjLTUuMzMgMS4yNC0xNy42MSAzLjYtMTguNjIgMy4zMWMtMS4xMi0uMzItMi4wMy0xLjEzLTIuOS0xLjkyYy02LjMzLTUuNzgtMTEuMjgtMTEuNjEtMTYuMTItMTguNjZjLS41Ny0uODMtMS4xNS0xLjY5LTEuMzYtMi42OGMtLjItLjkzLS4wNS0xLjg5LjEtMi44MmMuMzYtMi4zMiAxLjE2LTguNzUgMS44LTE0LjQybC0xLjg4IDMuNzNDOC4zNSA2OC45IDMuNjIgNzcuNDggNy40IDg2Ljk5Yy41IDEuMjYgMS4wMSAyLjUxIDEuNTQgMy43NWExOTIuNDggMTkyLjQ4IDAgMCAwIDkuMTcgMTguODNjMi44OSA1LjI0IDguMDUgNC42NCAxMy4yMyA1LjQzeiIgZmlsbD0idXJsKCNJY29uaWZ5SWQxN2VjZGIyOTA0ZDE3OGVhYjE5OTE1KSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iSWNvbmlmeUlkMTdlY2RiMjkwNGQxNzhlYWIxOTkxNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI5OS41NTMiIHkxPSI2Ni43MDIiIHgyPSI3NC43NzgiIHkyPSIxMS43NDUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzllOTU4ZSIvPjxzdG9wIG9mZnNldD0iLjQ0MiIgc3RvcC1jb2xvcj0iI2FlYTI5OCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2M5YjhhOSIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTg1LjA1IDkuOTVjLTEuMjMtMS40NS0zLjYzLTEuMTctNi4xNSAxLjEzbC05LjA2IDkuMDZjLS41Ni41Ni0uODYgMS4zMy0uODEgMi4xMmwuOTcgMTguNWMuMDMuNjIuMjYgMS4yLjY2IDEuNjdjMy4yMiAzLjc2IDE0LjYgMjEuODMgMTcuOSAyMS44M2MzLjI5IDAgOS4wNC0xMi44MiAxMS45Ny0xMi43NWMuNS4wMSAzLjExLjE3IDUuNjYuOTVjMi4zOC43MiAzLjMxLTIuNTUgMi44Mi00Ljg3Yy0yLjQ2LTMuOS01Ljc3LTkuMTMtNy42My0xMi4wOWMtNS42OS05LjAzLTkuOTctMTYuNS0xNi4zMy0yNS41NXoiIGZpbGw9InVybCgjSWNvbmlmeUlkMTdlY2RiMjkwNGQxNzhlYWIxOTkxNikiLz48bGluZWFyR3JhZGllbnQgaWQ9Ikljb25pZnlJZDE3ZWNkYjI5MDRkMTc4ZWFiMTk5MTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzcuNTAyIiB5MT0iMTA0LjU0NSIgeDI9IjQ3LjUwMiIgeTI9IjUwLjI5NSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNGM1YzY0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDU1YTY0IiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik00Mi44OSA0Ni4zN2MzLjMzLS41IDE0LjQ0LTIuMzkgMTYuNTMtMy4yMUM2My41IDQxLjU1IDY3LjEgMzQuNjkgNjkuNDggMzFjMCAwIC44MiAxMi4wMyAwIDE2LjczQzY4LjkxIDUxIDY2Ljc2IDY4LjEgNjQuNiA3Mi4yTDUxLjU0IDkzLjk2TDMyLjM1IDc0Ljc3Yy0xLjYzLTEuNjMtMi42Ny0yLjQ5LTMuMjYtNC44Yy0xLjM1LTUuMjgtMy44LTEzLjA3LTMuODEtMTcuNjZzMTIuMzYtNS4xNiAxNy42MS01Ljk0eiIgZmlsbD0idXJsKCNJY29uaWZ5SWQxN2VjZGIyOTA0ZDE3OGVhYjE5OTE3KSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iSWNvbmlmeUlkMTdlY2RiMjkwNGQxNzhlYWIxOTkxOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0MS43MzIiIHkxPSIyMC40MTYiIHgyPSI3MC43ODIiIHkyPSIyMC40MTYiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzRjNWM2NCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQ1NWE2NCIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJNNjcuMTYgMjAuNzRjLTEuMjgtMS41My0xLjY0LTMuNy0xLjItNS42NGMuMzctMS42MiAzLjczLTQuNzUgNC44Mi01Ljc0bC03LjY5IDEuODZhOC4yMjYgOC4yMjYgMCAwIDAtMy45NyAyLjI3TDQxLjczIDMxLjQ3czE2Ljg0LTcuMDIgMjUuNDMtMTAuNzN6IiBmaWxsPSJ1cmwoI0ljb25pZnlJZDE3ZWNkYjI5MDRkMTc4ZWFiMTk5MTgpIi8+PGxpbmVhckdyYWRpZW50IGlkPSJJY29uaWZ5SWQxN2VjZGIyOTA0ZDE3OGVhYjE5OTE5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ijg3LjI2MSIgeTE9Ijc2LjYwNyIgeDI9IjEyMS42MTYiIHkyPSI5MC43NjciPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzllOTU4ZSIvPjxzdG9wIG9mZnNldD0iLjI1IiBzdG9wLWNvbG9yPSIjYWVhMjk4Ii8+PHN0b3Agb2Zmc2V0PSIuNTY2IiBzdG9wLWNvbG9yPSIjYzliOGE5Ii8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJNMTE2LjA4IDc3LjQ2YTQ2LjM4IDQ2LjM4IDAgMCAxLTMuMDYtMTMuMzljLTUuNzQgMy45My04Ljk1IDkuMDMtMTguMTkgMTAuMjhjLTIuNDUuMzMtNi4yNC43OS04LjYzIDEuNDJjLTIuOTYuNzgtNS43IDIuOTctMTAuMTQgMy4zOGMtMy4xNi4zLTExLjEzLjA3LTkuOTMgMS44NWMxLjIgMS43OCA4LjM1IDUuMzcgMTAuMTMgNi44MmMyLjUzIDIuMDMgNC43MyA0LjQyIDYuODQgNi44OGMxLjEgMS4yOSAyLjc1IDQuNDIgNC42NyA1LjI3Yy40OS4yMiAxLjAxLjI4IDEuNTMuMTJjLjkxLS4yNyAxLjY0LS45MyAyLjM1LTEuNTZhOTQuNDAzIDk0LjQwMyAwIDAgMSAyMi45Ny0xNS4wMmMuODktLjQxIDEuODUtLjg3IDIuMjktMS43NWMuMTktLjM5LjI3LS45Mi4yOC0xLjQ5Yy0uMzUtLjk0LS43NC0xLjg3LTEuMTEtMi44MXoiIGZpbGw9InVybCgjSWNvbmlmeUlkMTdlY2RiMjkwNGQxNzhlYWIxOTkxOSkiLz48bGluZWFyR3JhZGllbnQgaWQ9Ikljb25pZnlJZDE3ZWNkYjI5MDRkMTc4ZWFiMTk5MjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTA0LjY0NiIgeTE9IjEyMy4zNTciIHgyPSI5Ny42MDYiIHkyPSI5NS41ODciPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzM3NDc0ZiIvPjxzdG9wIG9mZnNldD0iLjgwOCIgc3RvcC1jb2xvcj0iIzQyNTY1ZiIgc3RvcC1vcGFjaXR5PSIuMTkyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDU1YTY0IiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0xMTcuODcgODIuNjNjLS4xMy0uNjUtLjMyLTEuMjktLjU0LTEuOTJjLS4xNy41OS0uNTQgMS4yNC0xLjM0IDEuODVjLTIuMyAxLjc2LTExLjE3IDQuNDctMjAuOTMgMTMuMDJjLTYuMzcgNS41OC02LjM4IDYuMzMtNy43NSAxMi40OGMtMi4yNCAxMC4wNy01LjggMTMuNzMtNi40OCAxNC4zNWMuMzctLjA0LjctLjA5Ljk3LS4xN2M0LjMtMS4yMSAyMy43MS04LjM2IDI2LjMzLTkuNzZjMi4zOC0xLjI3IDkuMDItMTEuNzYgOS4yOS0xNC41N2MuMzQtMy40NC43Ny0xMy42Ny40NS0xNS4yOHoiIGZpbGw9InVybCgjSWNvbmlmeUlkMTdlY2RiMjkwNGQxNzhlYWIxOTkyMCkiLz48L3N2Zz4="
papim.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjxzdmcgZmlsbD0iIzAwMDAwMCIgaGVpZ2h0PSI4MDBweCIgd2lkdGg9IjgwMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIA0KCSB2aWV3Qm94PSIwIDAgMzA3LjQ1NCAzMDcuNDU0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnIGlkPSJMYXllcl81XzI5XyI+DQoJCTxnPg0KCQkJPGc+DQoJCQkJPGc+DQoJCQkJCTxwYXRoIGQ9Ik0yNDEuMTksMjAwLjU0MWMwLDIuNjkxLTIuMjAxLDQuODk1LTQuODkzLDQuODk1SDcxLjE1OGMtMi42OTMsMC00Ljg5NS0yLjIwMy00Ljg5NS00Ljg5NXYtMy4yNjENCgkJCQkJCWMwLTIuNjkxLDIuMjAxLTQuODk0LDQuODk1LTQuODk0aDE2NS4xMzljMi42OTEsMCw0Ljg5MywyLjIwMiw0Ljg5Myw0Ljg5NEwyNDEuMTksMjAwLjU0MUwyNDEuMTksMjAwLjU0MXoiLz4NCgkJCQk8L2c+DQoJCQkJPGc+DQoJCQkJCTxwYXRoIGQ9Ik0xNDAuMjE5LDY0Ljk5YzAsMi42OS0yLjIwMSw0Ljg5My00Ljg5NSw0Ljg5M0g3MS4xNThjLTIuNjkzLDAtNC44OTUtMi4yMDItNC44OTUtNC44OTN2LTMuMjYzDQoJCQkJCQljMC0yLjY5MSwyLjIwMS00Ljg5NCw0Ljg5NS00Ljg5NGg2NC4xNjZjMi42OTMsMCw0Ljg5NSwyLjIwMiw0Ljg5NSw0Ljg5NFY2NC45OXoiLz4NCgkJCQk8L2c+DQoJCQkJPGc+DQoJCQkJCTxwYXRoIGQ9Ik0yMzguNzEzLDI0NS43MjdjMCwyLjY5LTIuMjAzLDQuODkyLTQuODk3LDQuODkySDE2OS42NWMtMi42OTMsMC00Ljg5NS0yLjIwMi00Ljg5NS00Ljg5MnYtMy4yNjMNCgkJCQkJCWMwLTIuNjkxLDIuMjAxLTQuODk0LDQuODk1LTQuODk0aDY0LjE2NmMyLjY5MywwLDQuODk3LDIuMjAyLDQuODk3LDQuODk0VjI0NS43Mjd6Ii8+DQoJCQkJPC9nPg0KCQkJCTxnPg0KCQkJCQk8cGF0aCBkPSJNMTc0LjIzOCwxMTAuMTcyYzAsMi42OTEtMi4yMDEsNC44OTUtNC44OTMsNC44OTVINzEuMTU3Yy0yLjY5MywwLTQuODk1LTIuMjAzLTQuODk1LTQuODk1di0zLjI2MQ0KCQkJCQkJYzAtMi42OTEsMi4yMDEtNC44OTMsNC44OTUtNC44OTNoOTguMTg4YzIuNjkxLDAsNC44OTMsMi4yMDIsNC44OTMsNC44OTNWMTEwLjE3MnoiLz4NCgkJCQk8L2c+DQoJCQkJPGc+DQoJCQkJCTxwYXRoIGQ9Ik0yNDEuMTksMTU1LjM1N2MwLDIuNjkxLTIuMjAxLDQuODkzLTQuODkzLDQuODkzSDcxLjE1OGMtMi42OTMsMC00Ljg5NS0yLjIwMi00Ljg5NS00Ljg5M3YtMy4yNjINCgkJCQkJCWMwLTIuNjkxLDIuMjAxLTQuODk0LDQuODk1LTQuODk0aDE2NS4xMzljMi42OTEsMCw0Ljg5MywyLjIwMiw0Ljg5Myw0Ljg5NEwyNDEuMTksMTU1LjM1N0wyNDEuMTksMTU1LjM1N3oiLz4NCgkJCQk8L2c+DQoJCQk8L2c+DQoJCQk8cGF0aCBkPSJNMjcyLjQwMSw3NC41MjFMMTkzLjI3OCw5LjQ1NEMxODYuNzI3LDQuMDYyLDE3NS4zODksMCwxNjYuOTA3LDBINDIuNDQyYy0xMC43NiwwLTE5LjUxNiw4Ljc1NC0xOS41MTYsMTkuNTE2DQoJCQkJYzAsMCwwLDIxMC4wMjQsMCwyNjcuODM5YzAsMjAuMDk5LDE5LjAxLDIwLjA5OSwxOS40NjMsMjAuMDk5YzQ4LjM0LDAsMjIyLjYyMywwLDIyMi42MjMsMGMxMC43NjIsMCwxOS41MTYtOC43NTUsMTkuNTE2LTE5LjUxNw0KCQkJCVYxMDAuMTk4QzI4NC41MjgsOTEuMjQ3LDI3OS4zMTMsODAuMjA3LDI3Mi40MDEsNzQuNTIxeiBNMTg3Ljg2NywyOS40NzVjMC00Ljc4MSwzLjk1OS0xLjExMywzLjk1OS0xLjExM2w2Mi43MTcsNTMuNTg1DQoJCQkJYzAsMCw0LjAxNCwzLjk0OS0yLjg2NSwzLjk0OWMtMTQuNjg4LDAtNTguNzQ2LDAtNTguNzQ2LDBjLTIuNzkzLDAtNS4wNjUtMi4yNzEtNS4wNjUtNS4wNjQNCgkJCQlDMTg3Ljg2Nyw4MC44MzIsMTg3Ljg2Nyw0Mi4zMTUsMTg3Ljg2NywyOS40NzV6IE0yNjUuMDEyLDI5Mi45OTljMCwwLTE3OS4wNTUsMC0yMjMuOTksMGMtMC44MDEsMC0zLjY0My0wLjIyOS0zLjY0My00LjE4Mg0KCQkJCWMwLTU0LjQwNywwLTI2OS4zMDIsMC0yNjkuMzAyYzAtMi43NDUsMi4zMi01LjA2Myw1LjA2My01LjA2M2gxMjQuNDY0YzIuMTA3LDAsNi41MSwxLjExOCw2LjUxLDcuMTM4djU5LjI0Mg0KCQkJCWMwLDEwLjc2MSw4Ljc1NCwxOS41MTYsMTkuNTE2LDE5LjUxNmg3My41MjNjMS4zNDIsMCwzLjYxMywwLjkyMiwzLjYxMyw0LjE2OWMwLDAuMDUxLDAuMDA4LDE4My40MTksMC4wMDgsMTgzLjQxOQ0KCQkJCUMyNzAuMDc2LDI5MC43MjksMjY3LjgwNSwyOTIuOTk5LDI2NS4wMTIsMjkyLjk5OXoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg=="
sciim.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0id2luZG93cy0xMjUyIj8+DQo8IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjgwMHB4IiB3aWR0aD0iODAwcHgiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMwLjU1NiAzMC41NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTI2LjMxMSwyMy4yMjRjLTAuODEyLTEuNDE2LTIuMDcyLTIuMzc1LTMuNDAyLTIuNzM2Yy0xLjA1MS0wLjI4Ny0yLjE0MS0wLjE5OS0zLjA4NCwwLjMzNGwtMi44MDUtNC45MDQgICBjMS43MzYtMy40NjMsNS42MzMtMTEuMjI3LDYuMzMyLTEyLjQ1MUMyNC4yNTgsMS44ODQsMjIuNjM3LDAsMjIuNjM3LDBsLTcuMzYsMTIuODcyTDcuOTE5LDBjMCwwLTEuNjIsMS44ODQtMC43MTUsMy40NjYgICBjMC43LDEuMjI1LDQuNTk4LDguOTg4LDYuMzMyLDEyLjQ1MWwtMi44MDQsNC45MDRjLTAuOTQzLTAuNTMzLTIuMDM1LTAuNjIxLTMuMDg0LTAuMzM0Yy0xLjMzMiwwLjM2MS0yLjU5MSwxLjMyLTMuNDAzLDIuNzM2ICAgYy0xLjQ1OCwyLjU0Ny0wLjkwMSw1LjYwMiwxLjIzOSw2LjgyN2MwLjk0OSwwLjU0NSwyLjA0OCwwLjYzMiwzLjEwNywwLjM0NWMxLjMyOS0wLjM2MywyLjU5MS0xLjMyMiwzLjQwMi0yLjczNSAgIGMwLjM1NS0wLjYyNCwwLjU5LTEuMjc3LDAuNzEtMS45MjZ2MC4wMDFjMC4wMDEtMC4wMDUsMC4wMDEtMC4wMSwwLjAwNi0wLjAxNWMwLjAwNy0wLjA1NCwwLjAxNy0wLjEwOCwwLjAyMi0wLjE2NyAgIGMwLjYwMi00LjAzOSwxLjc0LTYuMTAyLDIuNTQ1LTcuMTA0YzAuODA3LDEuMDAyLDEuOTQ2LDMuMDY0LDIuNTQ3LDcuMTA0YzAuMDA2LDAuMDU5LDAuMDE2LDAuMTEzLDAuMDIxLDAuMTY3ICAgYzAuMDA0LDAuMDA1LDAuMDA0LDAuMDEsMC4wMDYsMC4wMTV2LTAuMDAxYzAuMTIxLDAuNjQ4LDAuMzU1LDEuMzAyLDAuNzA5LDEuOTI2YzAuODEyLDEuNDEzLDIuMDc0LDIuMzcyLDMuNDA0LDIuNzM1ICAgYzEuMDU5LDAuMjg3LDIuMTU4LDAuMiwzLjEwOS0wLjM0NUMyNy4yMTMsMjguODI1LDI3Ljc2OCwyNS43NzEsMjYuMzExLDIzLjIyNHogTTkuOTExLDI2LjQ2OCAgIGMtMC40NiwwLjgwMy0xLjE4OSwxLjQwOC0xLjk0OCwxLjYxNWMtMC4zMzgsMC4wOTItMC44MzQsMC4xNDgtMS4yODktMC4xMTNjLTAuOTctMC41NTUtMS4xMjktMi4xODYtMC4zNDYtMy41NTYgICBjMC40NjgtMC44MTIsMS4xNzctMS40MDMsMS45NS0xLjYxNGMwLjMzNS0wLjA5MSwwLjgzMS0wLjE0NiwxLjI4OCwwLjExM0MxMC41MzcsMjMuNDcsMTAuNjk1LDI1LjA5Nyw5LjkxMSwyNi40Njh6IE0yMy44ODEsMjcuOTcgICBjLTAuNDU1LDAuMjYyLTAuOTQ5LDAuMjA1LTEuMjg3LDAuMTEzYy0wLjc2LTAuMjA3LTEuNDg4LTAuODEyLTEuOTQ5LTEuNjE1Yy0wLjc4My0xLjM3MS0wLjYyNS0yLjk5OCwwLjM0Ni0zLjU1NSAgIGMwLjQ1Ny0wLjI2LDAuOTUzLTAuMjA0LDEuMjg5LTAuMTEzYzAuNzcxLDAuMjExLDEuNDgyLDAuODAyLDEuOTQ3LDEuNjE0QzI1LjAxLDI1Ljc4NCwyNC44NTIsMjcuNDE1LDIzLjg4MSwyNy45N3oiLz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg=="

class RPSObject {
constructor(posx, posy, type) {
    this.x = posx;
    this.y = posy;
    // this.id = id;
    this.type = type
    
    if (this.type == 0){
    this.name = 'Rock';
    // this.fillStyle = "#0095DD";
    this.im = rocim
    } else if (this.type == 1){
    this.name = 'Paper';
    // this.fillStyle = "#95DD00";
    this.im = papim
    } else if (this.type == 2){
    this.name = 'Scissor';
    // this.fillStyle = "#DD0095";
    this.im = sciim
    }
}

draw() {
    //ctx.beginPath();
    //ctx.rect(this.x, this.y, size, size)
    //ctx.fillStyle = this.fillStyle;
    //ctx.fill();
    //ctx.closePath();

    ctx.drawImage(this.im, this.x, this.y, size, size)
    
}

changetype(){
    if (this.type == 0){
    this.name = 'Rock';
    this.fillStyle = "#0095DD";
    this.im = rocim
    } else if (this.type == 1){
    this.name = 'Paper';
    this.fillStyle = "#95DD00";
    this.im = papim
    } else if (this.type == 2){
    this.name = 'Scissor';
    this.fillStyle = "#DD0095";
    this.im = sciim
    }
}

touch(that){
    if ((Math.abs(this.x - that.x) <= size) && (Math.abs(this.y - that.y) <= size)){
    this.type = that.type
    this.changetype()
    return true
    }
    return false
}

pos(){
    return [this.x, this.y]
}
}

function removeItemOnce(arr, index) {
if (index > -1) {
    arr.splice(index, 1);
}
return arr;
}

function dist(a, b){
return Math.sqrt((a[0]-b[0])**2 + (a[1]-b[1])**2)
}

function find_liked_obj(me_pt, arr){
dists = []
// console.log('hi')
for (let i = 0; i < arr.length; i++){
    dists[i] = dist(me_pt, [arr[i].x, arr[i].y])
}
return arr[dists.indexOf(Math.min.apply(Math, dists))]
}

let rocks = []
let papers = []
let scissors = []

// Init
for (let i=0; i < n; i++){
rocks[i] = new RPSObject(
    Math.floor(Math.random()*canvas.width), 
    Math.floor(Math.random()*canvas.height),
    0
);
papers[i] = new RPSObject(
    Math.floor(Math.random()*canvas.width), 
    Math.floor(Math.random()*canvas.height),
    1
);
scissors[i] = new RPSObject(
    Math.floor(Math.random()*canvas.width), 
    Math.floor(Math.random()*canvas.height),
    2
);
}


    // papers[i].x = Math.min(Math.abs(papers[i].x + dx*[-1, 0, 1][Math.floor(Math.random()*3)]), canvas.width-size)
    // papers[i].y = Math.min(Math.abs(papers[i].y + dy*[-1, 0, 1][Math.floor(Math.random()*3)]), canvas.height-size)
function move(me, me_food, my_food){
if (my_food.length > 0){
    like = find_liked_obj(me.pos(), my_food).pos()
    like_dist = dist(like, me.pos()) + size
    } else {
    like = [me.x, me.y]
    }

    if (me_food.length > 0){
    dislike = find_liked_obj(me.pos(), me_food).pos()
    dislike_dist = dist(dislike, me.pos()) + size
    } else {
    dislike = [me.x, me.y]
    }

    if (me_food.length == 0 || my_food.length == 0){
    like_dist = size
    dislike_dist = size
    }

    me.x = Math.min(Math.abs( me.x + dx*(like[0]/like_dist-dislike[0]/dislike_dist)  ), canvas.width-size)
    me.y = Math.min(Math.abs( me.y + dy*(like[1]/like_dist-dislike[1]/dislike_dist)  ), canvas.height-size)

    return me
}

function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

for (let i=0; i < rocks.length; i++){
    rocks[i] = move(rocks[i], papers, scissors)
}

for (let i=0; i < papers.length; i++){
    papers[i] = move(papers[i], scissors, rocks)
}

for (let i=0; i < scissors.length; i++){
    scissors[i] = move(scissors[i], rocks, papers)
}

for (let i=0; i < rocks.length; i++){
    for (let j=0; j < papers.length; j++){
    if (rocks[i].touch(papers[j])){
        // console.log('Rock touch paper')
        papers.push(rocks[i])
        removeItemOnce(rocks, i)
    }
    }
}
for (let i=0; i < papers.length; i++){
    for (let j=0; j < scissors.length; j++){
    if (papers[i].touch(scissors[j])){
        // console.log('Paper touch scissor')
        scissors.push(papers[i])
        removeItemOnce(papers, i)
    }
    }
}
for (let i=0; i < scissors.length; i++){
    for (let j=0; j < rocks.length; j++){
    if (scissors[i].touch(rocks[j])){
        // console.log('Scissor touch rock')
        rocks.push(scissors[i])
        removeItemOnce(scissors, i)
    }
    }  
}

for (let i=0; i < rocks.length; i++){
    rocks[i].draw()
}
for (let i=0; i < papers.length; i++){
    papers[i].draw()
}
for (let i=0; i < scissors.length; i++){
    scissors[i].draw()
}

// console.log(rocks.length, papers.length, scissors.length)
ctx.fillText(`Rocks: ${rocks.length}`, (0.8)*canvas.width, (0.1)*canvas.height); 
ctx.fillText(`Papers: ${papers.length}`, (0.8)*canvas.width, (0.13)*canvas.height); 
ctx.fillText(`Scissors: ${scissors.length}`, (0.8)*canvas.width, (0.16)*canvas.height); 

if (rocks.length == n*3){
    clearInterval(interval)
    if(!alert('ROCKS WON!')){window.location.reload();}
}
if (papers.length == n*3){
    clearInterval(interval)
    if(!alert('PAPERS WON!')){window.location.reload();}
}
if (scissors.length == n*3){
    clearInterval(interval)
    if(!alert('SCISSORS WON!')){window.location.reload();}
}

}

var interval = setInterval(draw, 10);
