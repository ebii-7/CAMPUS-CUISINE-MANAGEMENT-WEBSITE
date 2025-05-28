import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../../assets/images/Profile/background.jpg"; // Background image import
import shiro from "../../../assets/images/Profile/shiro.jpg";
import enkulal from "../../../assets/images/Profile/enkulal frfr.jpg";
import beyaynet from "../../../assets/images/Profile/beyaynet.jpg";
import pasta from "../../../assets/images/Profile/pasta.jpg";
import shrofeses from "../../../assets/images/Profile/shro eses.jpg";
import gomen from "../../../assets/images/Profile/gomen.jpg";
import { FaHeart, FaShare, FaBookmark } from "react-icons/fa";
import "./ProfilePage.css";

const favorites = [
    {
        id: 1,
        title: "Shiro Wot",
        image: shiro,
        rating: 4.5,
        reviews: 128,
        description: "A delicious chickpea stew with traditional spices"
    },
    {
        id: 2,
        title: "Enkulal Firfir",
        image: enkulal,
        rating: 4.2,
        reviews: 86,
        description: "Scrambled eggs with shredded injera and spices"
    },
    {
        id: 3,
        title: "Beyaynetu",
        image: beyaynet,
        rating: 4.8,
        reviews: 215,
        description: "Vegetarian platter with assorted stews"
    },
    {
        id: 4,
        title: "Pasta Special",
        image: pasta,
        rating: 4.0,
        reviews: 64,
        description: "Italian pasta with Ethiopian twist"
    },
    {
        id: 5,
        title: "Shro Esas",
        image: shrofeses,
        rating: 4.3,
        reviews: 92,
        description: "Traditional chickpea stew with special seasoning"
    },
    {
        id: 6,
        title: "Gomen Besiga",
        image: gomen,
        rating: 4.1,
        reviews: 78,
        description: "Collard greens with tender beef"
    }
];

const ProfilePage = () => {
    return (
        <div className="profile-page">
            {/* Profile Header */}
            <div className="profile-header">
                <div className="profile-bg">
                    <div className="profile-overlay">
                        <div className="profile-avatar">
                            <img
                                src={shiro}
                                alt="Profile"
                                className="avatar-img"
                            />
                        </div>
                        <h2>Selam's Favorites</h2>
                        <p>Food enthusiast | Regular customer since 2020</p>
                    </div>
                </div>
            </div>

            {/* Favorites Section */}
            <Container className="favorites-container">
                <h3 className="section-title">My Favorite Dishes</h3>
                <Row>
                    {favorites.map((item) => (
                        <Col key={item.id} md={4} className="mb-4">
                            <Card className="food-card">
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <div className="rating">
                                        ⭐ {item.rating} ({item.reviews} reviews)
                                    </div>
                                    <Card.Text>{item.description}</Card.Text>
                                    <div className="action-buttons">
                                        <button className="btn-like">
                                            <FaHeart /> Like
                                        </button>
                                        <button className="btn-share">
                                            <FaShare /> Share
                                        </button>
                                        <button className="btn-save">
                                            <FaBookmark /> Save
                                        </button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Recent Activity */}
            <Container className="activity-container">
                <h3 className="section-title">Recent Activity</h3>
                <div className="activity-list">
                    <div className="activity-item">
                        <span className="activity-icon">📝</span>
                        <p>Reviewed "Kitfo Special" - 5 stars</p>
                        <span className="activity-time">2 days ago</span>
                    </div>
                    <div className="activity-item">
                        <span className="activity-icon">❤️</span>
                        <p>Liked "Doro Wot" from Enjohe Restaurant</p>
                        <span className="activity-time">1 week ago</span>
                    </div>
                    <div className="activity-item">
                        <span className="activity-icon">📌</span>
                        <p>Saved "Vegetarian Combo" to favorites</p>
                        <span className="activity-time">2 weeks ago</span>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProfilePage;