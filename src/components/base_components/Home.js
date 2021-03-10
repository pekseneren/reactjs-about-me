import { Card, Container, CardContent } from '@material-ui/core';
import '../../App.css'
import { Link } from "react-router-dom";

function Home() {

    return (
        <Container className="mt-5">
            <div className="box">
                <div className="m-5 text-white">
                    <p>Hello World 👋</p>
                    <p>I'm Eren(not the titan), I am a backend developer living in Istanbul ❤️</p>
                    <p>Heres some technologies I have used 👉 .NET, JavaScript, Git, MSSQL, SQLite, Redis and Unity</p>
                    <p>And these are the technologies I want to understand completely and start learning in 2021 👉 Go, MongoDB, PostgreSQL, ReactJS, NodeJS, GraphQL, Docker, Kubernetes and Kafka</p>
                    <Link to="/projects">my github projects</Link>
                    <div className="mt-5 mx-auto">
                        <a href="https://github.com/pekseneren" target="blank">
                            <img className="social-link" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDM3XzEtZ2l0aHViIj48Zz48Zz48Zz48cGF0aCBkPSJNMjU1Ljk2OSwyMS43MzNjLTEzMS43MzksMC0yMzguNTcyLDEwNy41NDEtMjM4LjU3MiwyNDAuMjA2ICAgICAgYzAsMTA2LjEwNyw2OC4zNjIsMTk2LjEyMSwxNjMuMjA1LDIyNy45MWMxMS45MjksMi4yMiwxNi4yODUtNS4xOTYsMTYuMjg1LTExLjU2N2MwLTUuNzEzLTAuMjA1LTIwLjgxNy0wLjMzLTQwLjg1NiAgICAgIGMtNjYuMzYsMTQuNTA3LTgwLjM3NS0zMi4yMDgtODAuMzc1LTMyLjIwOGMtMTAuODI4LTI3Ljc1Ni0yNi40ODktMzUuMTM5LTI2LjQ4OS0zNS4xMzkgICAgICBjLTIxLjY4NC0xNC44OTMsMS42MTMtMTQuNTkxLDEuNjEzLTE0LjU5MWMyMy45NDgsMS43MDEsMzYuNTM0LDI0Ljc1OSwzNi41MzQsMjQuNzU5ICAgICAgYzIxLjI5NSwzNi42OTQsNTUuODY2LDI2LjEwNSw2OS40NjUsMTkuOTQ3YzIuMTQ2LTE1LjUyMSw4LjMxOC0yNi4xMDUsMTUuMTU0LTMyLjExNiAgICAgIGMtNTIuOTc0LTYuMDczLTEwOC42OS0yNi42ODEtMTA4LjY5LTExOC42OTljMC0yNi4yMjksOS4zMS00Ny42NjgsMjQuNTc2LTY0LjQ3OGMtMi40NzUtNi4wNzEtMTAuNjQ2LTMwLjUwNywyLjMyOS02My41NTQgICAgICBjMCwwLDIwLjA0NS02LjQ1NSw2NS42MTMsMjQuNjE0YzE5LjAzMS01LjMyNSwzOS40MzItNy45ODIsNTkuNzQyLTguMDcyYzIwLjI1LDAuMTIzLDQwLjY3NiwyLjc0Nyw1OS43MzgsOC4xMDUgICAgICBjNDUuNTQ3LTMxLjA3NCw2NS41NTktMjQuNjE0LDY1LjU1OS0yNC42MTRjMTMuMDAyLDMzLjA3Nyw0LjgzMiw1Ny40ODIsMi4zODcsNjMuNTQ5YzE1LjI5NywxNi44MSwyNC41MTYsMzguMjUsMjQuNTE2LDY0LjQ4MiAgICAgIGMwLDkyLjI1OC01NS43NzMsMTEyLjU2My0xMDguOTIsMTE4LjUxMmM4LjU1OSw3LjQyMiwxNi4xOTEsMjIuMDY5LDE2LjE5MSw0NC40NzFjMCwzMi4xMjQtMC4yOTcsNTguMDE5LTAuMjk3LDY1Ljg4OCAgICAgIGMwLDYuNDI3LDQuMjkzLDEzLjkwMywxNi40MDIsMTEuNTRjOTQuNjk3LTMxLjgyNCwxNjIuOTk4LTEyMS44MDUsMTYyLjk5OC0yMjcuODgzICAgICAgQzQ5NC42MDQsMTI5LjI3MywzODcuNzcxLDIxLjczMywyNTUuOTY5LDIxLjczM0wyNTUuOTY5LDIxLjczM3ogTTI1NS45NjksMjEuNzMzIiBzdHlsZT0iZmlsbDojNjg3OUQ5OyIvPjwvZz48L2c+PC9nPjwvZz48ZyBpZD0iTGF5ZXJfMSIvPjwvc3ZnPg=="></img>
                        </a>
                        <a href="https://stackoverflow.com/users/6296896/eren-pek%c5%9fen" target="blank">
                            <img className="social-link" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIGZpbGw9IiNGNDgwMjQiIGlkPSJlbGxpcHNlIiByPSIyNTYiLz48ZyBpZD0ibG9nbyI+PHJlY3QgZmlsbD0iI0ZGRkZGRiIgaGVpZ2h0PSIyNi45IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC44NjEzIC0wLjUwOCAwLjUwOCAtMC44NjEzIDM3NC44Njk2IDU0NC4wMDg3KSIgd2lkdGg9IjEyNiIgeD0iMTk4LjciIHk9IjIwNy40Ii8+PHJlY3QgZmlsbD0iI0ZGRkZGRiIgaGVpZ2h0PSIyNi45IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC45NjU3IC0wLjI1OTYgMC4yNTk2IC0wLjk2NTcgNDA3Ljc5MzUgNTkwLjcyNjMpIiB3aWR0aD0iMTI2IiB4PSIxNzkuOSIgeT0iMjU1Ii8+PHJlY3QgZmlsbD0iI0ZGRkZGRiIgaGVpZ2h0PSIyNi45IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC45OTU4IC05LjE3OTU4OGUtMDAyIDkuMTc5NTg4ZS0wMDIgLTAuOTk1OCA0NDEuOTMwNyA2NDkuNjM4MikiIHdpZHRoPSIxMjYiIHg9IjE3Mi45IiB5PSIzMDEuMiIvPjxyZWN0IGZpbGw9IiNGRkZGRkYiIGhlaWdodD0iMjYuOSIgd2lkdGg9IjEyNiIgeD0iMTcwLjIiIHk9IjM0MS40Ii8+PHBhdGggZD0iTTMzOS4xLDQwNC42YzAsMCwwLDYuMy0wLjIsNi4zdjAuMUgxMzcuM2MwLDAtNi4zLDAtNi4zLTAuMWgtMC4yVjI3OS44aDIxLjV2MTEwaDE2NS4zdi0xMTBoMjEuNVY0MDQuNnoiIGZpbGw9IiNGRkZGRkYiLz48cmVjdCBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI2LjkiIHRyYW5zZm9ybT0ibWF0cml4KDAuNTYzNCAwLjgyNjIgLTAuODI2MiAwLjU2MzQgMjc4LjQyNjkgLTE3My4yNTUyKSIgd2lkdGg9IjEyNiIgeD0iMjQwLjEiIHk9IjE2My40Ii8+PHJlY3QgZmlsbD0iI0ZGRkZGRiIgaGVpZ2h0PSIyNi45IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjE3MSAwLjk4NTMgLTAuOTg1MyAwLjE3MSA0NDkuMTY5NiAtMjIzLjEyMzMpIiB3aWR0aD0iMTI2IiB4PSIyOTQuMiIgeT0iMTQxLjkiLz48L2c+PC9zdmc+"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/eren-peksen/" target="blank">
                            <img className="social-link" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PGNpcmNsZSBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGN4PSIxNiIgY3k9IjE2IiBmaWxsPSIjMDA3QkI1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHI9IjE2Ii8+PGc+PHJlY3QgZmlsbD0iI0ZGRkZGRiIgaGVpZ2h0PSIxNCIgd2lkdGg9IjQiIHg9IjciIHk9IjExIi8+PHBhdGggZD0iTTIwLjQ5OSwxMWMtMi43OTEsMC0zLjI3MSwxLjAxOC0zLjQ5OSwydi0yaC00djE0aDR2LThjMC0xLjI5NywwLjcwMy0yLDItMmMxLjI2NiwwLDIsMC42ODgsMiwydjhoNHYtNyAgICBDMjUsMTQsMjQuNDc5LDExLDIwLjQ5OSwxMXoiIGZpbGw9IiNGRkZGRkYiLz48Y2lyY2xlIGN4PSI5IiBjeT0iOCIgZmlsbD0iI0ZGRkZGRiIgcj0iMiIvPjwvZz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"></img>
                        </a>
                        <a href="https://twitter.com/pekseneren" target="blank">
                            <img className="social-link" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQ4IDQ4IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxjaXJjbGUgY3g9IjI0IiBjeT0iMjQiIGZpbGw9IiMxQ0I3RUIiIHI9IjI0Ii8+PGc+PGc+PHBhdGggZD0iTTM2LjgsMTUuNGMtMC45LDAuNS0yLDAuOC0zLDAuOWMxLjEtMC43LDEuOS0xLjgsMi4zLTMuMWMtMSwwLjYtMi4xLDEuMS0zLjQsMS40Yy0xLTEuMS0yLjMtMS44LTMuOC0xLjggICAgYy0yLjksMC01LjMsMi41LTUuMyw1LjdjMCwwLjQsMCwwLjksMC4xLDEuM2MtNC40LTAuMi04LjMtMi41LTEwLjktNS45Yy0wLjUsMC44LTAuNywxLjgtMC43LDIuOWMwLDIsMC45LDMuNywyLjMsNC43ICAgIGMtMC45LDAtMS43LTAuMy0yLjQtMC43YzAsMCwwLDAuMSwwLDAuMWMwLDIuNywxLjgsNSw0LjIsNS42Yy0wLjQsMC4xLTAuOSwwLjItMS40LDAuMmMtMC4zLDAtMC43LDAtMS0wLjEgICAgYzAuNywyLjMsMi42LDMuOSw0LjksMy45Yy0xLjgsMS41LTQuMSwyLjQtNi41LDIuNGMtMC40LDAtMC44LDAtMS4zLTAuMWMyLjMsMS42LDUuMSwyLjYsOC4xLDIuNmM5LjcsMCwxNS04LjYsMTUtMTYuMSAgICBjMC0wLjIsMC0wLjUsMC0wLjdDMzUuMiwxNy42LDM2LjEsMTYuNiwzNi44LDE1LjR6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48L3N2Zz4="></img>
                        </a>
                        <a href="https://www.instagram.com/peksen.eren" target="blank">
                            <img className="social-link" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOCAxMjgiIGhlaWdodD0iMTI4cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB3aWR0aD0iMTI4cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDU5NCA2MzMpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9IlNWR0lEXzFfIiB4MT0iLTU2Ni43MTE0IiB4Mj0iLTQ5My4yODc1IiB5MT0iNTE2LjU2OTMiIHkyPSI2MjEuNDI5NiI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZCOTAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojOTEwMEVCIi8+PC9saW5lYXJHcmFkaWVudD48Y2lyY2xlIGN4PSI2NCIgY3k9IjY0IiBmaWxsPSJ1cmwoI1NWR0lEXzFfKSIgcj0iNjQiLz48L2c+PGc+PGc+PHBhdGggZD0iTTgyLjMzMywxMDRINDUuNjY3QzMzLjcyLDEwNCwyNCw5NC4yODEsMjQsODIuMzMzVjQ1LjY2N0MyNCwzMy43MTksMzMuNzIsMjQsNDUuNjY3LDI0aDM2LjY2NiAgICBDOTQuMjgxLDI0LDEwNCwzMy43MTksMTA0LDQ1LjY2N3YzNi42NjdDMTA0LDk0LjI4MSw5NC4yODEsMTA0LDgyLjMzMywxMDR6IE00NS42NjcsMzAuNjY3Yy04LjI3MSwwLTE1LDYuNzI5LTE1LDE1djM2LjY2NyAgICBjMCw4LjI3MSw2LjcyOSwxNSwxNSwxNWgzNi42NjZjOC4yNzEsMCwxNS02LjcyOSwxNS0xNVY0NS42NjdjMC04LjI3MS02LjcyOS0xNS0xNS0xNUg0NS42Njd6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjxnPjxwYXRoIGQ9Ik02NCw4NGMtMTEuMDI4LDAtMjAtOC45NzMtMjAtMjBjMC0xMS4wMjksOC45NzItMjAsMjAtMjBzMjAsOC45NzEsMjAsMjBDODQsNzUuMDI3LDc1LjAyOCw4NCw2NCw4NHogICAgIE02NCw1MC42NjdjLTcuMzUyLDAtMTMuMzMzLDUuOTgxLTEzLjMzMywxMy4zMzNjMCw3LjM1Myw1Ljk4MSwxMy4zMzMsMTMuMzMzLDEzLjMzM1M3Ny4zMzMsNzEuMzUzLDc3LjMzMyw2NCAgICBDNzcuMzMzLDU2LjY0OCw3MS4zNTMsNTAuNjY3LDY0LDUwLjY2N3oiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PGNpcmNsZSBjeD0iODUuMjUiIGN5PSI0Mi43NSIgZmlsbD0iI0ZGRkZGRiIgcj0iNC41ODMiLz48L2c+PC9nPjwvc3ZnPg=="></img>
                        </a>
                        <a href="mailto:peksen.eren@gmail.com">
                            <img className="social-link" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTIzOSAyNDEgMzIgMzI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yMzkgMjQxIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNEQzREM0Y7fQoJLnN0MXtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9Ii0yMjMiIGN5PSIyNTciIGlkPSJYTUxJRF8xXyIgcj0iMTUuMSIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMjIwLjcsMjU1LjlMLTIyMC43LDI1NS45TC0yMjAuNywyNTUuOWwtNi4zLDB2MmgzLjhjLTAuNCwxLjktMi4xLDMuMy00LjEsMy4zYy0yLjMsMC00LjItMS45LTQuMi00LjIgIGMwLTIuMywxLjktNC4yLDQuMi00LjJjMS4xLDAsMi4xLDAuNCwyLjksMS4ybDEuNy0xLjdjLTEuMi0xLjItMi45LTEuOS00LjYtMS45Yy0zLjYsMC02LjYsMy02LjYsNi42YzAsMy42LDMsNi42LDYuNiw2LjYgIHM2LjYtMyw2LjYtNi42Qy0yMjAuNywyNTctMjIwLjcsMjU2LjEtMjIwLjcsMjU1Ljl6Ii8+PHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSItMjEyLjQsMjU2LjIgLTIxNC42LDI1Ni4yIC0yMTQuNiwyNTQgLTIxNi43LDI1NCAtMjE2LjcsMjU2LjIgLTIxOC45LDI1Ni4yIC0yMTguOSwyNTguMyAgIC0yMTYuNywyNTguMyAtMjE2LjcsMjYwLjUgLTIxNC42LDI2MC41IC0yMTQuNiwyNTguMyAtMjEyLjQsMjU4LjMgIi8+PC9zdmc+"></img>
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Home;