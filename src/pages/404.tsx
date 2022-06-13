import * as React from "react"
import Layout from "../components/Layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="container mx-auto my-auto max-w-3xl text-center">
        <div className="py-10">
          <p className="text-4xl font-bold mb-4">404</p>
          <p className="text-gray-700">This page could not be found.</p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
