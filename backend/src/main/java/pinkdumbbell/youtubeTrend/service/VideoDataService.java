package pinkdumbbell.youtubeTrend.service;

import pinkdumbbell.youtubeTrend.domain.VideoData;
import pinkdumbbell.youtubeTrend.domain.VideoDataRepository;

import java.util.List;

public class VideoDataService {
    private VideoDataRepository videoDataRepository;
    public VideoDataService(VideoDataRepository videoDataRepository) {
        this.videoDataRepository = videoDataRepository;
    }

    public List<VideoData> findVideoData() {
        long start = System.currentTimeMillis();
        try {
            return videoDataRepository.findVideoID();
        } finally {
            long finish = System.currentTimeMillis();
            long timeMs = finish - start;
            System.out.println("findMembers " + timeMs + "ms");
        }
    }
}
