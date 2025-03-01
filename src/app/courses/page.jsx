"use client"

import { useState, useEffect, useCallback } from "react"
import { Search, BookOpenText, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CoursesPage() {
    const [courses, setCourses] = useState([])
    const [filteredCourses, setFilteredCourses] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [sortBy, setSortBy] = useState("best_match")
    const [selectedCategories, setSelectedCategories] = useState([])
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch("/courses.json")
                const data = await response.json()
                setCourses(data)
                setFilteredCourses(data)

                // Extract unique categories
                const uniqueCategories = [...new Set(data.map((course) => course.category))]
                setCategories(uniqueCategories)
                setIsLoading(false)
            } catch (error) {
                console.error("Error fetching courses:", error)
                setIsLoading(false)
            }
        }

        fetchCourses()
    }, [])

    const filterCourses = useCallback(() => {
        let filtered = [...courses]

        // Apply search filter
        if (searchQuery) {
            filtered = filtered.filter(
                (course) =>
                    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    course.category.toLowerCase().includes(searchQuery.toLowerCase()),
            )
        }

        // Apply category filter
        if (selectedCategories.length > 0) {
            filtered = filtered.filter((course) => selectedCategories.includes(course.category))
        }

        // Apply sorting
        if (sortBy === "newest") {
            filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        } else if (sortBy === "best_match") {
            filtered.sort((a, b) => b.rating - a.rating)
        }

        setFilteredCourses(filtered)
    }, [searchQuery, sortBy, selectedCategories, courses])

    useEffect(() => {
        filterCourses()
    }, [filterCourses])

    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
        )
    }

    const handleSearch = (e) => {
        e.preventDefault()
        filterCourses()
    }

    if (isLoading) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-6">
                {/* Header and Search */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h1 className="text-2xl font-bold">Browse Courses</h1>
                    <div className="w-full md:w-auto flex items-center gap-2">
                        <form onSubmit={handleSearch} className="relative w-full md:w-80">
                            <Input
                                type="text"
                                placeholder="Search courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2 w-full"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </form>
                        <div className="flex items-center gap-2">
                            <span className="text-sm whitespace-nowrap">Sort by:</span>
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="w-[140px]">
                                    <SelectValue placeholder="Best Match" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="best_match">Best Match</SelectItem>
                                    <SelectItem value="newest">Newest</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Sidebar Filters */}
                    <div className="w-full lg:w-64 shrink-0">
                        <div className="sticky top-20 border rounded-lg p-4 bg-white shadow-sm">
                            <h2 className="font-semibold text-lg mb-4">Filter by</h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium mb-2">Category</h3>
                                    <div className="space-y-2">
                                        {categories.map((category) => (
                                            <div key={category} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={`category-${category}`}
                                                    checked={selectedCategories.includes(category)}
                                                    onCheckedChange={() => handleCategoryChange(category)}
                                                />
                                                <label
                                                    htmlFor={`category-${category}`}
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    {category}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium mb-2">Level</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="level-beginner" />
                                            <label
                                                htmlFor="level-beginner"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Beginner
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="level-intermediate" />
                                            <label
                                                htmlFor="level-intermediate"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Intermediate
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="level-advanced" />
                                            <label
                                                htmlFor="level-advanced"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Advanced
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium mb-2">Duration</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="duration-short" />
                                            <label
                                                htmlFor="duration-short"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Less than 3 hours
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="duration-medium" />
                                            <label
                                                htmlFor="duration-medium"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                3-6 hours
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="duration-long" />
                                            <label
                                                htmlFor="duration-long"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                6+ hours
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Course Grid */}
                    <div className="flex-1">
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">All Results</h2>
                            <p className="text-gray-500">{filteredCourses.length} courses found</p>
                        </div>

                        {filteredCourses.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-500">No courses found matching your criteria.</p>
                                <Button
                                    variant="outline"
                                    className="mt-4"
                                    onClick={() => {
                                        setSearchQuery("")
                                        setSelectedCategories([])
                                        setSortBy("best_match")
                                    }}
                                >
                                    Clear filters
                                </Button>
                            </div>
                        ) : (
                            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                                {filteredCourses.map((course) => (
                                    <div
                                        key={course.id}
                                        className="rounded-lg border bg-background p-4 shadow-md hover:scale-105 transition-all duration-300"
                                    >
                                        <div className="relative">
                                            <img
                                                src={course.thumbnail || "/placeholder.svg"}
                                                alt={course.title}
                                                className="w-full h-40 object-cover rounded-md"
                                            />
                                            <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                                                New
                                            </div>
                                        </div>
                                        <div className="mt-4 space-y-2">
                                            <h3 className="font-semibold text-lg line-clamp-2">{course.title}</h3>
                                            <p className="text-sm text-gray-500">{course.category}</p>
                                            <div className="flex items-center gap-1 text-gray-600 text-sm">
                                                <BookOpenText className="w-4 h-4" />
                                                <span>{course.chapters} Chapters</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <div className="flex items-center">
                                                    <span className="text-yellow-500">★</span>
                                                    <span className="ml-1">{course.rating.toFixed(1)}</span>
                                                </div>
                                                <span className="text-gray-500">({course.reviews} reviews)</span>
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <span className="text-lg font-semibold">${course.price.toFixed(2)}</span>
                                                <Link
                                                    href={`/courses/${course.id}`}
                                                    className="text-primary font-medium text-sm flex items-center"
                                                >
                                                    Enroll <ArrowRight className="w-4 h-4 ml-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

