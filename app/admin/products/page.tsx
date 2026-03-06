'use client';

import { useState } from 'react';
import { products } from '@/lib/data';
import { ProductFormData } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Edit2, Trash2, Plus, Camera, X } from 'lucide-react';

export default function AdminProductsPage() {
  const [showForm, setShowForm] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    price: '',
    category: '',
    brand: '',
    cameraType: '',
    resolution: '',
    indoorOutdoor: '',
    shortDescription: '',
    description: '',
    stock: '',
    mainImage: '',
    imageUrl: '',
    galleryImages: [],
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setFormData((prev) => ({
      ...prev,
      imageUrl: url,
    }));
    if (url) {
      setImagePreview(url);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setFormData((prev) => ({
          ...prev,
          mainImage: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result as string;
          setGalleryPreviews((prev) => [...prev, result]);
          setFormData((prev) => ({
            ...prev,
            galleryImages: [...prev.galleryImages, result],
          }));
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeGalleryImage = (index: number) => {
    setGalleryPreviews((prev) => prev.filter((_, i) => i !== index));
    setFormData((prev) => ({
      ...prev,
      galleryImages: prev.galleryImages.filter((_, i) => i !== index),
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setFormData((prev) => ({
          ...prev,
          mainImage: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding product:', formData);
    setFormData({
      name: '',
      price: '',
      category: '',
      brand: '',
      cameraType: '',
      resolution: '',
      indoorOutdoor: '',
      shortDescription: '',
      description: '',
      stock: '',
      mainImage: '',
      imageUrl: '',
      galleryImages: [],
    });
    setImagePreview('');
    setGalleryPreviews([]);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Products</h1>
          <p className="text-muted-foreground">Manage your product inventory</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus className="w-4 h-4" />
          Add Product
        </Button>
      </div>

      {/* Add Product Form */}
      {showForm && (
        <Card className="p-6 border border-border">
          <h2 className="text-lg font-bold text-foreground mb-6">
            Add New Product
          </h2>
          <form onSubmit={handleAddProduct} className="space-y-6">
            {/* Basic Information */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide text-muted-foreground">
                Basic Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Product Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    placeholder="e.g., Hikvision 4MP Dome Camera"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Price <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    step="0.01"
                    required
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            {/* Camera Details */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide text-muted-foreground">
                Camera Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Brand <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="brand"
                    required
                    value={formData.brand}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    placeholder="e.g., Hikvision, Dahua, CP Plus"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Camera Type <span className="text-destructive">*</span>
                  </label>
                  <select
                    name="cameraType"
                    required
                    value={formData.cameraType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  >
                    <option value="">Select camera type</option>
                    <option value="Dome">Dome</option>
                    <option value="Bullet">Bullet</option>
                    <option value="PTZ">PTZ</option>
                    <option value="Wireless">Wireless</option>
                    <option value="CCTV Kit">CCTV Kit</option>
                    <option value="DVR / NVR">DVR / NVR</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Resolution <span className="text-destructive">*</span>
                  </label>
                  <select
                    name="resolution"
                    required
                    value={formData.resolution}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  >
                    <option value="">Select resolution</option>
                    <option value="2MP">2MP</option>
                    <option value="4MP">4MP</option>
                    <option value="5MP">5MP</option>
                    <option value="8MP">8MP</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Indoor / Outdoor <span className="text-destructive">*</span>
                  </label>
                  <select
                    name="indoorOutdoor"
                    required
                    value={formData.indoorOutdoor}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  >
                    <option value="">Select location type</option>
                    <option value="Indoor">Indoor</option>
                    <option value="Outdoor">Outdoor</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Category & Stock */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide text-muted-foreground">
                Inventory
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Category <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    placeholder="e.g., Dome Cameras"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Stock Quantity <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="number"
                    name="stock"
                    required
                    min="0"
                    value={formData.stock}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide text-muted-foreground">
                Product Images
              </h3>
              
              {/* Main Product Image */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Main Product Image
                </label>
                <div className="space-y-4">
                  {/* Drag and Drop Area */}
                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      dragActive
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Camera className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          Drag image here or click to upload
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image URL Alternative */}
                  <div>
                    <label className="text-xs text-muted-foreground mb-2 block">
                      Or paste image URL
                    </label>
                    <input
                      type="url"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleImageUrlChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground text-sm"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  {/* Image Preview */}
                  {imagePreview && (
                    <div className="relative inline-block">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-32 h-32 object-cover rounded-lg border border-border"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImagePreview('');
                          setFormData((prev) => ({
                            ...prev,
                            mainImage: '',
                            imageUrl: '',
                          }));
                        }}
                        className="absolute -top-2 -right-2 bg-destructive text-white rounded-full p-1 hover:bg-destructive/80"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Gallery Images */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Product Gallery Images (Optional)
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleGalleryUpload}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground text-sm"
                />
                
                {/* Gallery Previews */}
                {galleryPreviews.length > 0 && (
                  <div className="grid grid-cols-4 gap-3 mt-4">
                    {galleryPreviews.map((preview, index) => (
                      <div key={index} className="relative">
                        <img
                          src={preview}
                          alt={`Gallery ${index}`}
                          className="w-full aspect-square object-cover rounded-lg border border-border"
                        />
                        <button
                          type="button"
                          onClick={() => removeGalleryImage(index)}
                          className="absolute -top-2 -right-2 bg-destructive text-white rounded-full p-1 hover:bg-destructive/80"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Descriptions */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide text-muted-foreground">
                Descriptions
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Short Description <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    name="shortDescription"
                    required
                    value={formData.shortDescription}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                    placeholder="Brief overview of the product (for product listing)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Description <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                    placeholder="Detailed product description with specifications and features"
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 pt-4 border-t border-border">
              <Button type="submit" className="flex-1">
                Save Product
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setShowForm(false);
                  setFormData({
                    name: '',
                    price: '',
                    category: '',
                    brand: '',
                    cameraType: '',
                    resolution: '',
                    indoorOutdoor: '',
                    shortDescription: '',
                    description: '',
                    stock: '',
                    mainImage: '',
                    imageUrl: '',
                    galleryImages: [],
                  });
                  setImagePreview('');
                  setGalleryPreviews([]);
                }}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Products Table */}
      <Card className="border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-6 py-4 font-semibold text-foreground">
                  Product Name
                </th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">
                  Category
                </th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">
                  Price
                </th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">
                  Rating
                </th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">
                  Stock
                </th>
                <th className="text-center px-6 py-4 font-semibold text-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-border hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4 text-foreground font-medium">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground text-sm">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 font-semibold text-foreground">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {product.rating} ★
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.inStock
                          ? 'bg-green-500/20 text-green-700'
                          : 'bg-red-500/20 text-red-700'
                      }`}
                    >
                      {product.inStock ? 'In Stock' : 'Out'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="p-2 hover:bg-muted rounded transition-colors text-primary">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded transition-colors text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
