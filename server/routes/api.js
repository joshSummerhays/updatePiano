const express = require('express');
const router = express.Router();
const request = require('request');
const _ = require('lodash');
const { mongoose } = require('./../db/mongoose');
const { Wait } = require('./../models/waitlister');
const { Announce } = require('./../models/announce');
const { ObjectID } = require('mongodb');

//add waitlister
router.post('/waitlisters', (req, res) => {
    let waiter = new Wait(req.body);
    waiter.save().then((item) => {
        res.status(200).send(item);
    }).catch((e) => {
        res.status(400).send(e);
    })
});

//get all waitlisters
router.get('/waitlisters', (req, res) => {
    Wait.find().then((person) => {
        if (!person.length) {
            return res.status(404).send();
        }
        res.status(200).send(person);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

//delete waitlisters
router.delete('/waitlisters/:id', (req, res) => {
    Wait.findById(req.params.id, (err, person) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!person) {
            return res.status(500).json({
                title: 'Waitlisted person not found',
                error: err
            })
        }
        person.remove((err, result) => {
            if(err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Waitlister successfully deleted',
                obj: result
            });
        });
    });
});

//get announcement
router.get('/announce', (req, res) => {
    Announce.find().then((ann) => {
        if (!ann) {
            return res.status(404).send();
        }
        res.status(200).send(ann);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

//update announcement
router.patch('/announce', (req, res) => {
    Announce.findById('58e2a2ebfaaddb41ca3df840', (err, ann) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!ann) {
            return res.status(500).json({
                title: 'announcement not found',
                error: err
            })
        }
        ann.text = req.body.announce
        ann.save((err, result) => {
            if(err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Announcement successfully updated!',
                obj: result
            });
        });
    })
});


// create user login
// router.post('/users', (req, res) => {
//     let body = _.pick(req.body, ['email', 'password']);
//     let user = new User(body);
//     user.save().then(() => {
//         return user.generateAuthToken();
//     }).then((token) => {
//         res.header('x-auth', token).send(user);
//     }).catch((e) => {
//         res.status(400).send(e.errmsg);
//     });
// });

// create admin user
// router.post('/users/admin', authenticateAdmin, (req, res) => {
//     let body = _.pick(req.body, ['email', 'password']);
//     body.admin  = true;
//     let user = new User(body);
//     user.save().then(() => {
//         return true;
//     }).then(() => {
//         res.send(user.email);
//     }).catch((e) => {
//         res.status(400).send(e.errmsg);
//     });
// });

// returns user info
// router.get('/users/me', authenticate, (req, res) => {
//     res.send(req.user);
// });

// login to get new token
// router.post('/users/login', (req, res) => {
//     let body = _.pick(req.body, ['email', 'password']);
//     User.findByCredentials(body.email, body.password).then((user) => {
//         return user.generateAuthToken().then((token) => {
//             res.header('x-auth', token).send(user);
//         });
//         res.send(user);
//     }).catch((e) => {
//         res.status(400).send();
//     });
// });

// router.delete('/users/me/token', authenticate, (req, res) => {
//     req.user.removeToken(req.token).then(() => {
//         res.status(200).send();
//     }, () => {
//         res.status(400).send();
//     });
// });

// get all videos
// router.get('/videos', authenticate, (req, res) => {
//     Video.find().then((videos) => {
//         if (!videos.length) {
//             return res.status(404).send();
//         }
//         return res.status(200).send(videos);
//     }).catch((e) => {
//         return res.status(400).send();
//     });
// });

// get individual video
// router.get('/video/:id', authenticate, (req, res) => {
//     let id = req.params.id;

//     if (!ObjectID.isValid(id)) {
//         return res.status(400).send();
//     }

//     Video.find({_id: id}).populate('attachments').then((video) => {
//         if (!video) {
//             return res.status(404).send();
//         }

//         return res.status(200).send(video);
//     }).catch((e) => {
//         return res.status(400).send(e);
//     });
// });

// post video
// router.post('/video', authenticateAdmin, (req, res) => {
//     let a = req.body;

//     let video = new Video({
//         url: a.url,
//         title: a.title,
//         description: a.description
//     });

    // add attachments if available
//     let vid_attachments = [];
//     if (a.attachments && a.attachments.length) {
//         a.attachments.forEach(function (attach) {
//             let attachment = new Attachment({
//                 url: attach.url,
//                 title: attach.title,
//                 description: attach.description,
//                 image: attach.image,
//                 type: attach.type,
//                 vid_id: attach.vid_id
//             });

//             attachment.save().then((a) => {
//                 vid_attachments.push(vid);
//             }, (e) => {
//                 res.status(400).send(e);
//             });
//         });
//     }

//     video.save().then((vid) => {
//         vid.vid_attachments = vid_attachments;
//         res.send(vid);
//     }, (e) => {
//         res.status(400).send(e);
//     });
// });

// delete video
// router.delete('/video/:id', authenticateAdmin, (req, res) => {
//     let id = req.params.id;

//     if (!ObjectID.isValid(id)) {
//         return res.status(400).send();
//     }

//     Video.findByIdAndRemove(id).then((video) => {
//         if (!video) {
//             return res.status(404).send();
//         }
//         return res.status(200).send(video);
//     }).catch((e) => {
//         return res.status(400).send();
//     });
// });

module.exports = router;