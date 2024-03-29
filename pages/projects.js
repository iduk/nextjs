import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Layout from "../components/layout"
import { gsap, Power1, Power2, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const [visible, setVisible] = useState(null)
  const handleToggle = (index) => {
    if (visible === index) {
      return setVisible(null)
    }
    setVisible(index)
  }

  useEffect(() => {
    // gsap scrollTrigger
    gsap.utils.toArray(".post-list").forEach((layer) => {
      const elems = layer.querySelectorAll("li")

      gsap.set(elems, {
        duration: 1,
        y: 0,
        opacity: 0,
        ease: Power2,
        overwrite: "auto",
      })

      ScrollTrigger.create({
        trigger: ".page--projects",
        start: "top 80%",
        end: "bottom 20%",
        yoyo: true,
        markers: false,
        pin: false,

        onEnter: () =>
          gsap.to(elems, {
            opacity: 1,
            stagger: 0.15,
          }),
        onLeave: () =>
          gsap.to(elems, {
            opacity: 0,
            stagger: 0.15,
          }),
        onEnterBack: () =>
          gsap.to(elems, {
            opacity: 1,
            stagger: -0.15,
          }),
        onLeaveBack: () =>
          gsap.to(elems, {
            opacity: 0,
            stagger: -0.15,
          }),
      })
    })
  }, [])

  return (
    <Layout theme="projects">
      <div className="container">
        <article className="row justify-content-center">
          <div className="col-12">
            <div className="subpage-header">
              <h1 className="display-1">Projects</h1>
            </div>

            <ProjectList />
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default Projects

// import axios from "axios"
import prj from "../data/mock_data.json"

const ProjectList = () => {
  const router = useRouter()

  return (
    <>
      <ol className="post-list">
        {prj.map((post, index) => (
          <li key={post.postId}>
            <Link href={`/projects/${post.postId}`}>
              <a className="post-link">
                <div className="contents py-lg-3">
                  <p className="display-3 title">{post.title}</p>
                  <small>
                    {post.date} ⋅ {post.skill}
                  </small>
                  <p className="desc small">{post.desc}</p>
                </div>
                <span
                  className="thumb mask"
                  style={{
                    backgroundImage: `url(${post.thumbImg})`,
                  }}
                ></span>
              </a>
            </Link>
          </li>
        ))}
      </ol>
    </>
  )
}
