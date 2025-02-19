import React, { useState, useRef, useEffect } from "react";
import "../seller_page/seller_page.css";
import { Icon } from "@iconify/react";

import Navbar from "../../components/navbar/navbar";
import HeaderSeller from "../../components/header/header_seller";
import HomeSellerOption from "./seller_page_component/seller_home";
import AddProductOption from "./seller_page_component/seller_tambah_produk";
import ProductListOption from "./seller_page_component/seller_daftar_produk";
import OrderListOption from "./seller_page_component/seller_daftar_pesanan";
import ReviewOption from "./seller_page_component/seller_ulasan";
import DiscussionOption from "./seller_page_component/seller_diskusi";
import ComplainOption from "./seller_page_component/seller_komplain";
import HelperSellerOption from "./seller_page_component/seller_bantuan";
import ShopSettingOption from "./seller_page_component/seller_pengaturan_toko";
import AdminSettingOption from "./seller_page_component/seller_pengatuan_admin";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import isAuthenticated from "../../auth";

const SellerPage = () => {
	const [selectedOption, setSelectedOption] = useState("Home-Seller");
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState({
		produk: true,
		pesanan: true,
		chat: true,
		pengaturan: true,
	});

	const toggleOption = (option) => {
		setIsOpen((prevOpen) => ({ ...prevOpen, [option]: !prevOpen[option] }));
	};

	useEffect(() => {
		if (!isAuthenticated()) {
			swal("Warning!", "Login terlebih dahulu!", "warning").then(() => {
				navigate("/login");
			});
		}
	}, [navigate]);

	useEffect(() => {
		setIsOpen({
			produk: true,
			pesanan: true,
			chat: true,
			pengaturan: true,
		});
	}, []);

	const handleTambahProdukClick = () => {
		setSelectedOption("Tambah-Produk-Seller");
	};

	const renderSelectedOption = () => {
		switch (selectedOption) {
			case "Home-Seller":
				return <HomeSellerOption />;
			case "Tambah-Produk-Seller":
				return <AddProductOption />;
			case "Daftar-Produk-Seller":
				return (
					<ProductListOption
						onTambahProdukClick={handleTambahProdukClick}
					/>
				);
			case "Daftar-Pesanan-Seller":
				return <OrderListOption />;
			case "Ulasan-Seller":
				return <ReviewOption />;
			case "Diskusi-Seller":
				return <DiscussionOption />;
			case "Komplain-Seller":
				return <ComplainOption />;
			case "Bantuan-Seller":
				return <HelperSellerOption />;
			case "Pengaturan-Toko-Seller":
				return <ShopSettingOption />;
			case "Pengaturan-Admin-Seller":
				return <AdminSettingOption />;
			default:
				return <HomeSellerOption />;
		}
	};

	return (
		<div className="main-seller-page-container">
			<Navbar />
			<HeaderSeller />
			<div className="main-seller-menu-container">
				<div className="seller-menu-container">
					<div className="seller-menu-height">
						<div className="hide-seller-menu-content">
							<Icon
								icon="majesticons:chevron-left-line"
								className="chevron-hide-menu"
							/>
							<p>Sembunyikan Menu</p>
						</div>

						<div className="horizontal-line-seller-menu"></div>

						<div className="seller-menu-option-container">
							<div className="seller-menu-option-content">
								<div
									className={`seller-menu-option-header-choose ${selectedOption === "Home-Seller"
										? "selected"
										: ""
										}`}
									onClick={() =>
										setSelectedOption("Home-Seller")
									}
								>
									<Icon icon="bi:house-fill" />
									<h2
										className={`seller-menu-option-header-h2 ${selectedOption === "Home-Seller"
											? "selected"
											: ""
											}`}
									>
										Home
									</h2>
								</div>
							</div>

							<div className="seller-menu-option-content">
								<div className="seller-menu-option-link">
									<div
										className="seller-menu-option-header"
										onClick={() => toggleOption("produk")}
									>
										<Icon icon="bi:box2-fill" />
										<h2>Produk</h2>
									</div>
									<div
										className={`chevron-seller-option-header ${isOpen.produk ? "open-seller" : ""
											}`}
									>
										<Icon icon="tabler:chevron-up" />
									</div>
								</div>

								<div
									className={`seller-produk-option-content ${isOpen.produk
										? "show-seller-dropdown"
										: ""
										}`}
								>
									<h3
										className={`select-seller-option-menu ${selectedOption ===
											"Tambah-Produk-Seller"
											? "selected"
											: ""
											}`}
										onClick={() =>
											setSelectedOption(
												"Tambah-Produk-Seller"
											)
										}
									>
										Tambah Produk
									</h3>
									<h3
										className={`select-seller-option-menu ${selectedOption ===
											"Daftar-Produk-Seller"
											? "selected"
											: ""
											}`}
										onClick={() =>
											setSelectedOption(
												"Daftar-Produk-Seller"
											)
										}
									>
										Daftar Produk
									</h3>
								</div>
							</div>

							<div className="seller-menu-option-content">
								<div className="seller-menu-option-link">
									<div
										className="seller-menu-option-header"
										onClick={() => toggleOption("pesanan")}
									>
										<Icon icon="bi:clipboard2-data-fill" />
										<h2>Pesanan</h2>
									</div>
									<div
										className={`chevron-seller-option-header ${isOpen.pesanan ? "open-seller" : ""
											}`}
									>
										<Icon icon="tabler:chevron-up" />
									</div>
								</div>

								<div
									className={`seller-pengaturan-option-content ${isOpen.pesanan
										? "show-seller-dropdown"
										: ""
										}`}
								>
									<h3
										className={`select-seller-option-menu ${selectedOption ===
											"Daftar-Pesanan-Seller"
											? "selected"
											: ""
											}`}
										onClick={() =>
											setSelectedOption(
												"Daftar-Pesanan-Seller"
											)
										}
									>
										Daftar Pesanan
									</h3>
									<h3
										className={`select-seller-option-menu ${selectedOption === "Ulasan-Seller"
											? "selected"
											: ""
											}`}
										onClick={() =>
											setSelectedOption("Ulasan-Seller")
										}
									>
										Ulasan
									</h3>
								</div>
							</div>

							<div className="seller-menu-option-content">
								<div className="seller-menu-option-link">
									<div
										className="seller-menu-option-header"
										onClick={() => toggleOption("chat")}
									>
										<Icon
											icon="material-symbols:chat-rounded"
											width="16"
											height="16"
										/>
										<h2>Chat</h2>
									</div>
									<div
										className={`chevron-seller-option-header ${isOpen.chat ? "open-seller" : ""
											}`}
									>
										<Icon icon="tabler:chevron-up" />
									</div>
								</div>

								<div
									className={`seller-pengaturan-option-content ${isOpen.chat
										? "show-seller-dropdown"
										: ""
										}`}
								>
									<h3
										className={`select-seller-option-menu ${selectedOption === "Diskusi-Seller"
											? "selected"
											: ""
											}`}
										onClick={() =>
											setSelectedOption("Diskusi-Seller")
										}
									>
										Diskusi
									</h3>
									<h3
										className={`select-seller-option-menu ${selectedOption === "Komplain-Seller"
											? "selected"
											: ""
											}`}
										onClick={() =>
											setSelectedOption("Komplain-Seller")
										}
									>
										Komplain
									</h3>
								</div>
							</div>
						</div>

						<div className="horizontal-line-seller-menu"></div>

						<div className="seller-menu-option-container">
							<div className="seller-menu-option-content">
								<div
									className={`seller-menu-option-header-choose ${selectedOption === "Bantuan-Seller"
										? "selected"
										: ""
										}`}
									onClick={() =>
										setSelectedOption("Bantuan-Seller")
									}
								>
									<Icon icon="bi:house-heart-fill" />

									<h2
										className={`seller-menu-option-header-h2 ${selectedOption === "Bantuan-Seller"
											? "selected"
											: ""
											}`}
									>
										Bantuan Seller
									</h2>
								</div>
							</div>

							<div className="seller-menu-option-content">
								<div className="seller-menu-option-link">
									<div
										className="seller-menu-option-header"
										onClick={() =>
											toggleOption("pengaturan")
										}
									>
										<Icon icon="bi:gear-fill" />
										<h2>Pengaturan</h2>
									</div>
									<div
										className={`chevron-seller-option-header ${isOpen.pengaturan
											? "open-seller"
											: ""
											}`}
									>
										<Icon icon="tabler:chevron-up" />
									</div>
								</div>

								<div
									className={`seller-pengaturan-option-content ${isOpen.pengaturan
										? "show-seller-dropdown"
										: ""
										}`}
								>
									<h3
										className={`select-seller-option-menu ${selectedOption ===
											"Pengaturan-Toko-Seller"
											? "selected"
											: ""
											}`}
										onClick={() =>
											setSelectedOption(
												"Pengaturan-Toko-Seller"
											)
										}
									>
										Pengaturan Toko
									</h3>
									<h3
										className={`select-seller-option-menu ${selectedOption ===
											"Pengaturan-Admin-Seller"
											? "selected"
											: ""
											}`}
										onClick={() =>
											setSelectedOption(
												"Pengaturan-Admin-Seller"
											)
										}
									>
										Pengaturan Admin
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="seller-menu-choose-option-container">
					{renderSelectedOption()}
				</div>
			</div>
		</div>
	);
};

export default SellerPage;
