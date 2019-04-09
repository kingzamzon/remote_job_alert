var Job = require('../models/jobs')

exports.job_list = function(req, res) {
    
    Job.getMaxListeners(function (err, jobs) {
        if(err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Jobs retrieved successfully",
            data: jobs
        })
    })
}