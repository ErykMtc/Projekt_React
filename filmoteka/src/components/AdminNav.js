import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Button from 'react-bootstrap/Button';

export default function AdminNav() {
  return (
    <div className="admin-nav">
        <Link className="btn btn-outline-warning" role="button" to="/admin"> Kącik Admina </Link>
    </div>
  )
}